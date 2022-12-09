package json

import "github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"

type ChatJson struct {
	Id       int    `json:"id"`
	Message  string `json:"message"`
	Size     string `json:"size"`
	MemberId int    `json:"member_id"`
	RoomId   string `json:"room_id"`
}

type ChatsJson []RoomJson

func ChatEntityToJson(c *entity.Chat) *ChatJson {
	return &ChatJson{
		Id:       c.Id,
		Message:  c.Message,
		Size:     c.Size,
		MemberId: c.MemberId,
		RoomId:   c.RoomId,
	}
}

func ChatJsonToEntity(j *ChatJson) *entity.Chat {
	return &entity.Chat{
		Id:       j.Id,
		Message:  j.Message,
		Size:     j.Size,
		MemberId: j.MemberId,
		RoomId:   j.RoomId,
	}
}
