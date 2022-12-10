package json

import (
	"time"

	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
)

type ChatJson struct {
	Id        int       `json:"id"`
	Message   string    `json:"message"`
	Size      string    `json:"size"`
	MemberId  int       `json:"member_id"`
	RoomId    string    `json:"room_id"`
	Score     float64   `json:"score"`
	CreatedAt time.Time `json:"created_at"`
}

type ChatsJson []RoomJson

func ChatEntityToJson(c *entity.Chat) *ChatJson {
	return &ChatJson{
		Id:        c.Id,
		Message:   c.Message,
		Size:      c.Size,
		MemberId:  c.MemberId,
		RoomId:    c.RoomId,
		Score:     c.Score,
		CreatedAt: c.CreatedAt,
	}
}

func ChatJsonToEntity(j *ChatJson) *entity.Chat {
	return &entity.Chat{
		Id:        j.Id,
		Message:   j.Message,
		Size:      j.Size,
		MemberId:  j.MemberId,
		RoomId:    j.RoomId,
		Score:     j.Score,
		CreatedAt: j.CreatedAt,
	}
}
