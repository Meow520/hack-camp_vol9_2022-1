package persistance

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/repository"
	db_error "github.com/Doer-org/hack-camp_vol9_2022-1/error/infrastructure"
)

var _ repository.IMemberRepository = &MemberRepository{}

type MemberRepository struct {
	db *sql.DB
}

func NewMemberRepository(db *sql.DB) *MemberRepository {
	return &MemberRepository{
		db: db,
	}
}

func (repo *MemberRepository) CreateMember(name string, roomId string) (*entity.Member, error) {
	statement := "INSERT INTO members (name, room_id) VALUES(?,?)"

	stmt, err := repo.db.Prepare(statement)
	if err != nil {
		log.Println(err)
		return nil, fmt.Errorf("%v : %v", db_error.StatementError, err)
	}
	defer stmt.Close()

	member := &entity.Member{}
	_, err = stmt.Exec(name, roomId)

	member.Name = name
	member.RoomId = roomId

	if err != nil {
		log.Println(err)
		return nil, fmt.Errorf("%v : %v", db_error.ExecError, err)
	}

	return member, nil
}

func (repo *MemberRepository) GetAllMembersOfRoomID(roomId string) (entity.Members, error) {

	rows, err := repo.db.Query("SELECT * FROM members WHERE room_id = ?", roomId)
	if err != nil {
		log.Println(err)
		return nil, fmt.Errorf("%v : %v", db_error.StatementError, err)
	}
	defer rows.Close()

	var member entity.Members

	for rows.Next() {
		m := &entity.Member{}
		err := rows.Scan(&m.Id, &m.Name, &m.RoomId)
		if err != nil {
			log.Println(err)
			return nil, fmt.Errorf("%v : %v", db_error.RowsScanError, err)
		}
		member = append(member, m)
	}

	err = rows.Err()
	if err != nil {
		log.Println(err)
		return nil, fmt.Errorf("%v : %v", db_error.RowsLoopError, err)
	}

	return member, nil
}



func (repo *MemberRepository) DeleteAllMembersOfRoomID(roomId string) error {
	statement := "DELETE FROM members WHERE room_id = ?"

	stmt, err := repo.db.Prepare(statement)
	if err != nil {
		log.Println(err)
		return db_error.StatementError
	}
	defer stmt.Close()

	_, err = stmt.Exec(roomId)

	if err != nil {
		log.Println(err)
		return db_error.ExecError
	}

	return nil
}

