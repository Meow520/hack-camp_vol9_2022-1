package handler

import (
	"net/http"

	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
	"github.com/Doer-org/hack-camp_vol9_2022-1/usecase"
	"github.com/gin-gonic/gin"
)

type RoomHandler struct {
	uc usecase.IRoomUsecase
}

func NewRoomHandler(uc usecase.IRoomUsecase) *RoomHandler {
	return &RoomHandler{
		uc: uc,
	}
}

func (rh RoomHandler) NewRoom(ctx *gin.Context) {
	var json roomJson
	if err := ctx.BindJSON(&json); err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	room := rooomJsonToEntity(&json)
	room, err := rh.uc.NewRoom(room.Id, room.Name, room.MaxMember, room.MemberCount)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	roomJson := roomEntityToJson(room)
	ctx.JSON(
		http.StatusOK,
		gin.H{"data": roomJson},
	)

}

type roomJson struct {
	Id          string `json:"id"`
	Name        string `json:"name"`
	MaxMember   int    `json:"max_member"`
	MemberCount int    `json:"member_count"`
}

type roomsJson []roomJson

func roomEntityToJson(c *entity.Room) roomJson {
	return roomJson{
		Id:          c.Id,
		Name:        c.Name,
		MaxMember:   c.MaxMember,
		MemberCount: c.MemberCount,
	}
}

func rooomJsonToEntity(j *roomJson) *entity.Room {
	return &entity.Room{
		Id:          j.Id,
		Name:        j.Name,
		MaxMember:   j.MaxMember,
		MemberCount: j.MemberCount,
	}
}
