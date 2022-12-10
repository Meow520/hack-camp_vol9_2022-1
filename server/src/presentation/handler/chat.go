package handler

import (
	"net/http"

	"github.com/Doer-org/hack-camp_vol9_2022-1/usecase"
	"github.com/gin-gonic/gin"
)

type ChatHandler struct {
	uc usecase.IChatUsecase
}

func NewChatHandler(uc usecase.IChatUsecase) *ChatHandler {
	return &ChatHandler{
		uc: uc,
	}
}

func (rh *ChatHandler) DeleteChatOfRoomId(ctx *gin.Context) {
	id := ctx.Param("roomId")
	err := rh.uc.DeleteChatOfRoomId(id)

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
