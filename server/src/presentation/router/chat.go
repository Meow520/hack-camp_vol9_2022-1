package router

import (
	"database/sql"

	"github.com/Doer-org/hack-camp_vol9_2022-1/infrastructure/persistance"
	"github.com/Doer-org/hack-camp_vol9_2022-1/presentation/handler"
	"github.com/Doer-org/hack-camp_vol9_2022-1/usecase"
)

func (r Router) InitChatRouter(db *sql.DB) {
	repoChat := persistance.NewChatRepository(db)
	ucChat := usecase.NewChatUsecase(repoChat)
	h := handler.NewChatHandler(ucChat)

	g := r.Engine.Group("/chat")
	g.DELETE("/room/:roomId", h.DeleteChatOfRoomId)
}
