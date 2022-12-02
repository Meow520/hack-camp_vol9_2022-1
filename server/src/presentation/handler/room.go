package handler

import "github.com/Doer-org/hack-camp_vol9_2022-1/usecase"

type RoomHandler struct {
	uc usecase.IRoomUsecase
}

func NewPostHandler(uc usecase.IRoomUsecase) *RoomHandler {
	return &RoomHandler{
		uc: uc,
	}
}

func (con RoomHandler) NewRoom() {
	
}
