package handler

import (
	"net/http"
	"strconv"

	"github.com/Doer-org/hack-camp_vol9_2022-1/presentation/json"
	"github.com/Doer-org/hack-camp_vol9_2022-1/usecase"
	"github.com/gin-gonic/gin"
)

type MemberHandler struct {
	ucMember usecase.IMemberUsecase
	ucRoom   usecase.IRoomUsecase
}

func NewMemberHandler(ucMember usecase.IMemberUsecase, ucRoom usecase.IRoomUsecase) *MemberHandler {
	return &MemberHandler{
		ucMember: ucMember,
		ucRoom:   ucRoom,
	}
}

func (rh *MemberHandler) CreateMember(ctx *gin.Context) {
	var memberjson json.MemberJson
	if err := ctx.BindJSON(&memberjson); err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	room, err := rh.ucRoom.GetRoomOfID(memberjson.RoomId)

	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	if room.MemberCount >= room.MaxMember {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": "room member is full"},
		)
		return
	}

	member := json.MemberJsonToEntity(&memberjson)
	member, err = rh.ucMember.CreateMember(member.Name, member.RoomId)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	_, err = rh.ucRoom.MemberCountPlus(member.RoomId)
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	memberJson := json.MemberEntityToJson(member)
	ctx.JSON(
		http.StatusOK,
		gin.H{"data": memberJson},
	)

}

func (rh *MemberHandler) GetAllMembersOfRoomID(ctx *gin.Context) {
	roomId := ctx.Param("roomId")
	member, err := rh.ucMember.GetAllMembersOfRoomID(roomId)

	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	memberJson := json.MembersEntityToJson(member)
	ctx.JSON(
		http.StatusOK,
		gin.H{"data": memberJson},
	)

}

func (rh *MemberHandler) DeleteAllMembersOfRoomID(ctx *gin.Context) {
	roomId := ctx.Param("roomId")
	err := rh.ucMember.DeleteAllMembersOfRoomID(roomId)

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

func (rh *MemberHandler) GetMemberOfId(ctx *gin.Context) {
	idString := ctx.Param("id")
	id, err := strconv.Atoi(idString)

	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	member, err := rh.ucMember.GetMemberOfId(id)

	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	memberJson := json.MemberEntityToJson(member)
	ctx.JSON(
		http.StatusOK,
		gin.H{"data": memberJson},
	)
}
