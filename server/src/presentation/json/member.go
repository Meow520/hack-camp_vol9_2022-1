package json

import "github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"

type MemberJson struct {
	Id     int    `json:"id"`
	Name   string `json:"name"`
	RoomId string `json:"room_id"`
}

type MembersJson []MemberJson

type MemberIdJson string

func MemberEntityToJson(c *entity.Member) *MemberJson {
	return &MemberJson{
		Id:     c.Id,
		Name:   c.Name,
		RoomId: c.RoomId,
	}
}

func MembersEntityToJson(c entity.Members) *MembersJson {
	var MembersJson MembersJson
	for _, member := range c {
		MembersJson = append(MembersJson, *MemberEntityToJson(member))
	}

	return &MembersJson
}

func MemberJsonToEntity(j *MemberJson) *entity.Member {
	return &entity.Member{
		Id:     j.Id,
		Name:   j.Name,
		RoomId: j.RoomId,
	}
}
