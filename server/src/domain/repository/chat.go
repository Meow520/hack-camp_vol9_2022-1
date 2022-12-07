package repository

import "github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"

type IChatRepository interface {
	CreateMember(name string, room_id string) (*entity.Member, error)
}
