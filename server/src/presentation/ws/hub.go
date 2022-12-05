package ws

import (
	"sync"

	"github.com/Doer-org/hack-camp_vol9_2022-1/presentation/json"
)

type Hub struct {
	// Registered clients.
	Clients map[*Client]bool

	// Inbound messages from the clients.
	BroadcastRoom chan *json.RoomJson

	// Register requests from the clients.
	Register chan *Client

	// Unregister requests from clients.
	Unregister chan *Client

	RoomId json.RoomIdJson

	// スレッドセーフ
	Mu sync.RWMutex
}

type Hubs map[json.RoomIdJson]*Hub

type HubsStore struct {
	Hubs *Hubs
	Mu   sync.RWMutex
}

// NewHubは新しいHubオブジェクトを生成します
func NewHub(roomId json.RoomIdJson) *Hub {
	return &Hub{
		BroadcastRoom: make(chan *json.RoomJson),
		Register:      make(chan *Client),
		Unregister:    make(chan *Client),
		Clients:       make(map[*Client]bool),
		RoomId:        roomId,
		Mu:            sync.RWMutex{},
	}
}

// NewHubsは新たにHubsオブジェクトのポインタを返します
func NewHubs() *Hubs {
	return &Hubs{}
}

func NewHubsStore() *HubsStore {
	return &HubsStore{
		Hubs: NewHubs(),
		Mu:   sync.RWMutex{},
	}
}

// RunはHubを起動し、待ち受け状態にします
func (h *Hub) Run() {
	for {
		select {
		case client := <-h.Register:
			h.Clients[client] = true
		case client := <-h.Unregister:
			if _, ok := h.Clients[client]; ok {
				delete(h.Clients, client)
				close(client.SendRoomInfo)
			}
		// BroadcastRoomにroom情報が来た時、各ClientのSendRoomInfoチャネルにroom情報を送る
		case room := <-h.BroadcastRoom:
			for client := range h.Clients {
				select {
				case client.SendRoomInfo <- room:
				default:
					close(client.SendRoomInfo)
					delete(h.Clients, client)
				}
			}
		}
	}
}
