package persistance

import (
	"database/sql"
	"log"

	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/repository"
	db_error "github.com/Doer-org/hack-camp_vol9_2022-1/error/infrastructure"
)

var _ repository.IMemberRepository = &MemberRepository{}

type MemberRepository struct {
	db *sql.DB
}

func CreateMemberRepository(db *sql.DB) *MemberRepository {
	return &MemberRepository{
		db: db,
	}
}

func (repo *MemberRepository) CreateMember(name string, roomId string) (*entity.Member, error) {
	statement := "INSERT INTO members VALUES(?,?)"

	stmt, err := repo.db.Prepare(statement)
	if err != nil {
		log.Println(err)
		return nil, db_error.StatementError
	}
	defer stmt.Close()

	member := &entity.Member{}
	_, err = stmt.Exec(name, roomId)

	member.Name = name
	member.RoomId = roomId

	if err != nil {
		log.Println(err)
		return nil, db_error.ExecError
	}

	return member, nil
}

