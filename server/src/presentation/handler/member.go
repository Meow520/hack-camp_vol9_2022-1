package handler

import (
	"net/http"

	"github.com/Doer-org/hack-camp_vol9_2022-1/presentation/json"
	"github.com/Doer-org/hack-camp_vol9_2022-1/usecase"
	"github.com/gin-gonic/gin"
)

type MemberHandler struct {
	uc usecase.IMemberUsecase
}

func CreateMemberHandler(uc usecase.IMemberUsecase) *MemberHandler {
	return &MemberHandler{
		uc: uc,
	}
}

func (rh MemberHandler) CreateMember(ctx *gin.Context) {
	var memberjson json.MemberJson
	if err := ctx.BindJSON(&memberjson); err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{"error": err.Error()},
		)
		return
	}

	member := json.MemberJsonToEntity(&memberjson)
	member, err := rh.uc.CreateMember(member.Name, member.RoomId)
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

