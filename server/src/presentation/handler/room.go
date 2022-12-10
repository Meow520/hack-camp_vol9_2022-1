package handler

import (
	"net/http"

	"github.com/Doer-org/hack-camp_vol9_2022-1/presentation/json"
	"github.com/Doer-org/hack-camp_vol9_2022-1/usecase"
	"github.com/gin-gonic/gin"
)

type RoomHandler struct {
	ucRoom   usecase.IRoomUsecase
	ucChat   usecase.IChatUsecase
	ucMember usecase.IMemberUsecase
}

func NewRoomHandler(ucRoom usecase.IRoomUsecase, ucChat usecase.IChatUsecase, ucMember usecase.IMemberUsecase) *RoomHandler {
	return &RoomHandler{
		ucRoom:   ucRoom,
		ucChat:   ucChat,
		ucMember: ucMember,
	}
}

func (rh *RoomHandler) NewRoom(ctx *gin.Context) {
	var roomjson json.RoomJson
	if err := ctx.BindJSON(&roomjson); err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	room := json.RoomJsonToEntity(&roomjson)
	room, err := rh.ucRoom.NewRoom(room.Id, room.Name, room.MaxMember, room.MemberCount)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	roomJson := json.RoomEntityToJson(room)
	ctx.JSON(
		http.StatusOK,
		gin.H{"data": roomJson},
	)

}

func (rh *RoomHandler) GetRoomOfID(ctx *gin.Context) {
	id := ctx.Param("id")
	room, err := rh.ucRoom.GetRoomOfID(id)

	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	roomJson := json.RoomEntityToJson(room)
	ctx.JSON(
		http.StatusOK,
		gin.H{"data": roomJson},
	)
}

func (rh *RoomHandler) DeleteRoomOfID(ctx *gin.Context) {
	id := ctx.Param("id")
	err := rh.ucRoom.DeleteRoomOfID(id)

	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	err = rh.ucChat.DeleteChatOfRoomId(id)

	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	err = rh.ucMember.DeleteAllMembersOfRoomID(id)

	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	ctx.JSON(
		http.StatusOK,
		gin.H{"data": "success"},
	)
}
