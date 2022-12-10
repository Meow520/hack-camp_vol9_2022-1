package usecase

import (
	"errors"
	"testing"

	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
	usecase_error "github.com/Doer-org/hack-camp_vol9_2022-1/error/usecase"
)

func Test_CreateMember(t *testing.T) {
	tests := []struct {
		name      string
		reqName   string
		reqRoomId string
		wantErr   error
	}{
		{
			name:      "正常に動作した場合",
			reqRoomId: "testRoom",
			reqName:   "testName",
			wantErr:   nil,
		},
		{
			name:      "roomidが空なら roomid empty error",
			reqRoomId: "",
			reqName:   "testName",
			wantErr:   usecase_error.RoomIdEmptyError,
		},
		{
			name:      "nameが空なら name empty error",
			reqRoomId: "testRoom",
			reqName:   "",
			wantErr:   usecase_error.NameEmptyError,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			memberusecase := NewMemberUsecase(&MemberRepositoryMock{})
			_, err := memberusecase.CreateMember(tt.reqName, tt.reqRoomId)

			if !errors.Is(err, tt.wantErr) {
				t.Errorf("TestUsecase_CreateMember code Error : want %s but got %s", tt.wantErr, err)
			}
		})
	}
}

type MemberRepositoryMock struct{}

var (
	testCreateMember *entity.Member = &entity.Member{
		Id:     1,
		Name:   "testName",
		RoomId: "testRoom",
	}

	testCreateMembers entity.Members = entity.Members{
		testCreateMember,
	}
)

func (h *MemberRepositoryMock) CreateMember(name string, roomId string) (*entity.Member, error) {
	return testCreateMember, nil
}

func (h *MemberRepositoryMock) GetAllMembersOfRoomID(roomId string) (entity.Members, error) {
	return testCreateMembers, nil
}

func (h *MemberRepositoryMock) DeleteAllMembersOfRoomID(roomId string) error {
	return nil
}

func (h *MemberRepositoryMock) GetMemberOfId(id int) (*entity.Member, error) {
	return testCreateMember, nil
}
