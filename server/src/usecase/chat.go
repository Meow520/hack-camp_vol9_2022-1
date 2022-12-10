package usecase

import (
	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/repository"
	usecase_error "github.com/Doer-org/hack-camp_vol9_2022-1/error/usecase"
	"github.com/Doer-org/hack-camp_vol9_2022-1/utils/api"
)

var _ IChatUsecase = &ChatUsecase{}

type ChatUsecase struct {
	repo repository.IChatRepository
}

type IChatUsecase interface {
	CreateChat(message string, size string, member_id int, room_id string, score float64) (*entity.Chat, error)
	GetAllChat() ([]*entity.Chat, error)
	DeleteChatOfRoomId(room_id string) error
}

func NewChatUsecase(repo repository.IChatRepository) IChatUsecase {
	return &ChatUsecase{
		repo: repo,
	}
}

func (pu *ChatUsecase) CreateChat(message string, size string, member_id int, room_id string, score float64) (*entity.Chat, error) {
	if message == "" {
		return nil, usecase_error.MessageEmptyError
	}

	if size == "" {
		return nil, usecase_error.SizeEmptyError
	}

	if member_id == 0 {
		return nil, usecase_error.MemberIdEmptyError
	}

	if room_id == "" {
		return nil, usecase_error.RoomIdEmptyError
	}

	data, err := api.DoGoogleNLPAPI(message)

	if err != nil {
		return nil, usecase_error.RoomIdEmptyError
	}

	score = data.DocumentSentiment.Score

	chat, err := pu.repo.CreateChat(message, size, member_id, room_id, score)
	return chat, err
}

func (pu *ChatUsecase) GetAllChat() ([]*entity.Chat, error) {
	chat, err := pu.repo.GetAllChat()
	return chat, err
}

func (pu *ChatUsecase) DeleteChatOfRoomId(room_id string) error {
	if room_id == "" {
		return usecase_error.RoomIdEmptyError
	}

	err := pu.repo.DeleteChatOfRoomId(room_id)
	return err
}
