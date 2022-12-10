package repository

import "github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"

type IMemberRepository interface {
	CreateMember(name string, roomId string) (*entity.Member, error)
	GetAllMembersOfRoomID(roomId string) (entity.Members, error)
	DeleteAllMembersOfRoomID(roomId string) error
	GetMemberOfId(id int) (*entity.Member, error)
}
