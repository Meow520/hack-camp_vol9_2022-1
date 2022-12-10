package usecase

import (
	"testing"

	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
	usecase_error "github.com/Doer-org/hack-camp_vol9_2022-1/error/usecase"
)

func Test_NewRoom(t *testing.T) {
	tests := []struct {
		name        string
		reqname     string
		reqmaxmem   int
		reqmemcount int
		wantErr     error
	}{
		{
			name:        "正常に動作した場合",
			reqname:     "testName",
			reqmaxmem:   5,
			reqmemcount: 1,
			wantErr:     nil,
		},
		{
			name:        "nameが空なら name empty error",
			reqname:     "",
			reqmaxmem:   5,
			reqmemcount: 1,
			wantErr:     usecase_error.NameEmptyError,
		},
		{
			name:        "maxmember が 0 なら不正",
			reqname:     "testName",
			reqmaxmem:   0,
			reqmemcount: 1,
			wantErr:     usecase_error.MaxMemberError,
		},
		{
			name:        "membercountが 0 なら不正",
			reqname:     "testName",
			reqmaxmem:   1,
			reqmemcount: 0,
			wantErr:     usecase_error.MemberCountError,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			roomusecase := NewRoomUsecase(&RoomRepositoryMock{})
			_, err := roomusecase.NewRoom("c1", tt.reqname, tt.reqmaxmem, tt.reqmemcount)

			if err != tt.wantErr {
				t.Errorf("TestUsecase_NewRoom code Error : want %s but got %s", tt.wantErr, err)
			}
		})
	}

}

func Test_GetRoomOfID(t *testing.T) {
	tests := []struct {
		name    string
		reqId   string
		wantErr error
	}{
		{
			name:    "正常に動作した場合",
			reqId:   "testId",
			wantErr: nil,
		},
		{
			name:    "idが空なら id empty error",
			reqId:   "",
			wantErr: usecase_error.IdEmptyError,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			roomusecase := NewRoomUsecase(&RoomRepositoryMock{})
			_, err := roomusecase.GetRoomOfID(tt.reqId)

			if err != tt.wantErr {
				t.Errorf("TestUsecase_NewRoom code Error : want %s but got %s", tt.wantErr, err)
			}
		})
	}
}

func Test_DeleteRoomOfID(t *testing.T) {
	tests := []struct {
		name    string
		reqId   string
		wantErr error
	}{
		{
			name:    "正常に動作した場合",
			reqId:   "testId",
			wantErr: nil,
		},
		{
			name:    "idが空なら id empty error",
			reqId:   "",
			wantErr: usecase_error.IdEmptyError,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			roomusecase := NewRoomUsecase(&RoomRepositoryMock{})
			err := roomusecase.DeleteRoomOfID(tt.reqId)

			if err != tt.wantErr {
				t.Errorf("TestUsecase_NewRoom code Error : want %s but got %s", tt.wantErr, err)
			}
		})
	}
}

type RoomRepositoryMock struct{}

var (
	testCreateRoom *entity.Room = &entity.Room{
		Id:          "testId",
		Name:        "testName",
		MaxMember:   5,
		MemberCount: 1,
	}

	testGetRoom *entity.Room = &entity.Room{
		Id:          "",
		Name:        "",
		MaxMember:   0,
		MemberCount: 0,
	}
)

func (h *RoomRepositoryMock) NewRoom(id string, name string, max_member int, member_count int) (*entity.Room, error) {
	return testCreateRoom, nil
}

func (h *RoomRepositoryMock) GetRoomOfID(id string) (*entity.Room, error) {
	return testGetRoom, nil
}

func (h *RoomRepositoryMock) DeleteAllRoom() error {
	return nil
}

func (h *RoomRepositoryMock) DeleteRoomOfID(id string) error {
	return nil
}
