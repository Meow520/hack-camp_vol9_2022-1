package router

import (
	"database/sql"

	"github.com/Doer-org/hack-camp_vol9_2022-1/infrastructure/persistance"
	"github.com/Doer-org/hack-camp_vol9_2022-1/presentation/handler"
	"github.com/Doer-org/hack-camp_vol9_2022-1/usecase"
)

func (r Router) InitMemberRouter(db *sql.DB) {
	repo := persistance.CreateMemberRepository(db)
	uc := usecase.CreateMemberUsecase(repo)
	h := handler.CreateMemberHandler(uc)

	g := r.Engine.Group("/member")
	g.POST("/create", h.CreateMember)
}
