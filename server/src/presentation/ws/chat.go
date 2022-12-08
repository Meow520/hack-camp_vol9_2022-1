package ws

import (
	"log"
	"net/http"
	"time"

	"github.com/Doer-org/hack-camp_vol9_2022-1/presentation/json"
	"github.com/Doer-org/hack-camp_vol9_2022-1/usecase"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

type RoomWsHandler struct {
	ucChat    usecase.IChatUsecase
	ucRoom    usecase.IRoomUsecase
	HubsStore *HubsStore
}

func NewRoomWsHandler(ucChat usecase.IChatUsecase, ucRoom usecase.IRoomUsecase, hubsStore *HubsStore) *RoomWsHandler {
	return &RoomWsHandler{
		ucChat:    ucChat,
		ucRoom:    ucRoom,
		HubsStore: hubsStore,
	}
}

func (h *RoomWsHandler) ConnectWsRoom(ctx *gin.Context) {
	roomId := ctx.Param("room_id")
	roomIdJson := json.RoomIdEntityToJson(roomId)

	var hub *Hub
	// もしすでにroomIdのHubが存在していた場合hubに入れる
	hub, found := h.HubsStore.GetExistsHubOfRoomId(roomIdJson)

	// roomIdのHubが存在していなかったら新しく登録し、Hubを起動する
	if !found {
		hub = NewHub(roomIdJson)
		h.HubsStore.SetNewHubOfRoomId(hub, roomIdJson)
		go hub.Run()
	}
	//TODO: ここにroomがあるなら作成ないならjoinの関数を作りましょう
	h.serveWsConnOfHub(hub, ctx.Writer, ctx.Request, roomIdJson)
}

// receiveEventInfoFromConnはクライアントからEvent情報が送られてきたとき、
// Eventごとに処理を行い、新たなRoom情報をBroadcastRoomInfoに書き込みます
func (h *RoomWsHandler) receiveEventInfoFromConn(c *Client) {
	defer func() {
		c.Hub.Unregister <- c
		c.Conn.Close()
	}()
	c.setConnectionConfig()

	for {
		eJson := json.ChatJson{}
		// ここで処理をまつ
		if err := c.Conn.ReadJSON(&eJson); err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("Error : %v", err)
			}
			break
		}

		e := json.ChatJsonToEntity(&eJson)

		// eventを実行して、最新のroomオブジェクトを返す
		room, err := h.ucChat.CreateChat(e.Message, e.Size, e.MemberId, e.RoomId)
		if err != nil {
			log.Println("ExecEventOfEventType Error :", err)
		}

		roomJson := json.ChatEntityToJson(room)
		c.Hub.BroadcastRoom <- roomJson
	}
}

// sendRoomInfoToAllClientsはBroadcastRoomInfoに入ってきたRoomの情報を
// Hubに登録されたすべてのクライアントに送ります
func (h *RoomWsHandler) sendRoomInfoToAllClients(c *Client) {
	ticker := time.NewTicker(pingPeriod)
	defer func() {
		ticker.Stop()
		c.Conn.Close()
	}()

	for {
		select {
		case room, ok := <-c.SendRoomInfo:
			c.setWriteDeadline()
			if !ok {
				c.Conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			if err := c.Conn.WriteJSON(room); err != nil {
				log.Println("Error : write json failed")
			}

		case <-ticker.C:
			c.setWriteDeadline()
			if err := c.Conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}

// serveWsConnOfHubはコネクションをwebsocket通信にアップグレードし、
// Clientオブジェクトを用意してClientを受け取ったHubに登録します
func (h *RoomWsHandler) serveWsConnOfHub(hub *Hub, w http.ResponseWriter, r *http.Request, roomId json.RoomIdJson) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("Error : ", err)
		return
	}

	client := &Client{
		Hub:          hub,
		Conn:         conn,
		SendRoomInfo: make(chan *json.ChatJson),
		RoomId:       roomId,
	}

	// HubにClientを登録する
	client.Hub.Register <- client

	go h.sendRoomInfoToAllClients(client)
	go h.receiveEventInfoFromConn(client)
}
