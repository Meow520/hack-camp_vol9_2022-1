package usecase

import (
	"testing"
	"time"

	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
	usecase_error "github.com/Doer-org/hack-camp_vol9_2022-1/error/usecase"
	"github.com/stretchr/testify/assert"
)

func Test_CreateChat(t *testing.T) {
	tests := []struct {
		name         string
		reqmessage   string
		reqsize      string
		reqmemberId  int
		reqroomId    string
		reqScore     float64
		reqcreatedAt time.Time
		wantErr      error
	}{
		{
			name:         "正常に動作した場合",
			reqmessage:   "testmessage",
			reqsize:      "mid",
			reqmemberId:  1,
			reqroomId:    "testroom",
			reqScore:     0,
			reqcreatedAt: time.Now(),
			wantErr:      nil,
		},
		{
			name:         "message が空なら message empty error",
			reqmessage:   "",
			reqsize:      "mid",
			reqmemberId:  1,
			reqroomId:    "testroom",
			reqScore:     0,
			reqcreatedAt: time.Now(),
			wantErr:      usecase_error.MessageEmptyError,
		},
		{
			name:         "size が空なら size empty error",
			reqmessage:   "testmessage",
			reqsize:      "",
			reqmemberId:  1,
			reqroomId:    "testroom",
			reqScore:     0,
			reqcreatedAt: time.Now(),
			wantErr:      usecase_error.SizeEmptyError,
		},
		{
			name:         "memberidが 0 なら不正",
			reqmessage:   "testmessage",
			reqsize:      "mid",
			reqmemberId:  0,
			reqroomId:    "testroom",
			reqScore:     0,
			reqcreatedAt: time.Now(),
			wantErr:      usecase_error.MemberIdEmptyError,
		},
		{
			name:         "roomidがが空なら roomid empty error",
			reqmessage:   "testmessage",
			reqsize:      "mid",
			reqmemberId:  0,
			reqroomId:    "",
			reqScore:     0,
			reqcreatedAt: time.Now(),
			wantErr:      usecase_error.MemberIdEmptyError,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			chatusecase := NewChatUsecase(&ChatRepositoryMock{})
			_, err := chatusecase.CreateChat(tt.reqmessage, tt.reqsize, tt.reqmemberId, tt.reqroomId, tt.reqScore)

			assert.Equal(t, err, tt.wantErr)
			if err != tt.wantErr {
				t.Errorf("TestUsecase_NewRoom code Error : want %s but got %s", tt.wantErr, err)
			}
		})
	}
}

type ChatRepositoryMock struct{}

var (
	testCreateChat *entity.Chat = &entity.Chat{
		Id:        1,
		Message:   "testMessage",
		Size:      "Big",
		MemberId:  1,
		RoomId:    "testRoom",
		Score:     0.5,
		CreatedAt: time.Now(),
	}

	testCreateChats entity.Chats = entity.Chats{
		testCreateChat,
	}
)

func (h *ChatRepositoryMock) CreateChat(message string, size string, member_id int, room_id string, score float64) (*entity.Chat, error) {
	return testCreateChat, nil
}

func (h *ChatRepositoryMock) GetAllChat() ([]*entity.Chat, error) {
	return testCreateChats, nil
}

func (h *ChatRepositoryMock) DeleteChatOfRoomId(room_id string) error {
	return nil
}
