package repository

import "github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"

type IChatRepository interface {
	CreateChat(message string, size string, member_id int, room_id string, score float64) (*entity.Chat, error)
	GetAllChat() ([]*entity.Chat, error)
}
