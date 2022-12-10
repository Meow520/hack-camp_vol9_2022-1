package router

import (
	"database/sql"

	"github.com/Doer-org/hack-camp_vol9_2022-1/infrastructure/persistance"
	"github.com/Doer-org/hack-camp_vol9_2022-1/presentation/handler"
	"github.com/Doer-org/hack-camp_vol9_2022-1/usecase"
)

func (r Router) InitMemberRouter(db *sql.DB) {
	repoMember := persistance.NewMemberRepository(db)
	ucMember := usecase.NewMemberUsecase(repoMember)

	repoRoom := persistance.NewRoomRepository(db)
	ucRoom := usecase.NewRoomUsecase(repoRoom)

	h := handler.NewMemberHandler(ucMember, ucRoom)

	g := r.Engine.Group("/member")
	g.POST("/create", h.CreateMember)
	g.GET("/room/:roomId", h.GetAllMembersOfRoomID)
	g.GET("/:id", h.GetMemberOfId)
	g.DELETE("/room/:roomId", h.DeleteAllMembersOfRoomID)
}
