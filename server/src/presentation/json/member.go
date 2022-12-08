package json

import "github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"

type MemberJson struct {
	Name        string `json:"name"`
	RoomId     string `json:"room_id"`
}

type MembersJson []MemberJson

type MemberIdJson string

func MemberEntityToJson(c *entity.Member) MemberJson {
	return MemberJson{
		Name:        c.Name,
		RoomId:      c.RoomId,
	}
}

func MemberJsonToEntity(j *MemberJson) *entity.Member {
	return &entity.Member{
		Name:        j.Name,
		RoomId: 		 j.RoomId,
	}
}
