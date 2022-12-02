package persistance

import (
	"database/sql"

	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/repository"
)

var _ repository.IRoomRepository = &RoomRepository{}

type RoomRepository struct {
	db *sql.DB
}

func NewRoomRepository(db *sql.DB) *RoomRepository {
	return &RoomRepository{
		db: db,
	}
}

func (repo *RoomRepository) NewRoom(id string, name string, max_member int, member_count int) (*entity.Room, error) {
	return nil, nil
}
func (repo *RoomRepository) GetRoomOfID(id string) (*entity.Room, error) {
	return nil, nil
}
func (repo *RoomRepository) DeleteAllRoom() error {
	return nil
}
