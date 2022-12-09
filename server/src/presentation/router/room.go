package router

import (
	"database/sql"

	"github.com/Doer-org/hack-camp_vol9_2022-1/infrastructure/persistance"
	"github.com/Doer-org/hack-camp_vol9_2022-1/presentation/handler"
	"github.com/Doer-org/hack-camp_vol9_2022-1/presentation/ws"
	"github.com/Doer-org/hack-camp_vol9_2022-1/usecase"
)

func (r Router) InitRoomRouter(db *sql.DB) {
	hubsStore := ws.NewHubsStore()

	repoRoom := persistance.NewRoomRepository(db)
	ucRoom := usecase.NewRoomUsecase(repoRoom)
	h := handler.NewRoomHandler(ucRoom)

	repoChat := persistance.NewChatRepository(db)
	ucChat := usecase.NewChatUsecase(repoChat)
	hWs := ws.NewRoomWsHandler(ucChat, ucRoom, hubsStore)

	g := r.Engine.Group("/room")
	g.POST("/create", h.NewRoom)
	g.GET("/:id", h.GetRoomOfID)
	g.DELETE("/:id", h.DeleteRoomOfID)

	wg := r.Engine.Group("/ws")
	wg.GET("/:room_id", hWs.ConnectWsRoom)
	wg.DELETE("/:room_id", hWs.DeleteHubOfRoomId)
}
