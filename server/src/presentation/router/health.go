package router

import "github.com/Doer-org/hack-camp_vol9_2022-1/presentation/handler"

func (r Router) InitHealthRouter() {
	r.Engine.GET("/health", handler.HealthHandler)
}
