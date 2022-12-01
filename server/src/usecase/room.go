package usecase

import (
	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/repository"
	"github.com/Doer-org/hack-camp_vol9_2022-1/utils"
)

type RoomUsecase struct {
	repo repository.IRoomRepository
}

type IRoomUsecase interface {
	NewRoom(id string, name string, max_member int, member_count int) (*entity.Room, error)
	GetRoomOfID(id string) *entity.Room
}

func NewRoomUsecase(repo repository.IRoomRepository) IRoomUsecase {
	return &RoomUsecase{
		repo: repo,
	}
}

func (uc RoomUsecase) NewRoom(id string, name string, max_member int, member_count int) (*entity.Room, error) {
	if name == "" {
		return nil, nil
	}

	id = utils.GetHashId()
	room, err := uc.repo.NewRoom(id, name, max_member, member_count)
	return room, err
}

func (uc RoomUsecase) GetRoomOfID(id string) *entity.Room {
	room := uc.repo.GetRoomOfID(id)
	return room
}
