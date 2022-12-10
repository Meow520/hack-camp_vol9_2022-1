package persistance

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/repository"
	db_error "github.com/Doer-org/hack-camp_vol9_2022-1/error/infrastructure"
)

var _ repository.IChatRepository = &ChatRepository{}

type ChatRepository struct {
	db *sql.DB
}

func NewChatRepository(db *sql.DB) *ChatRepository {
	return &ChatRepository{
		db: db,
	}
}

func (repo *ChatRepository) CreateChat(message string, size string, member_id int, room_id string, score float64) (*entity.Chat, error) {
	statement := "INSERT INTO chats(message, size, member_id, room_id, score) VALUES(?,?,?,?,?)"
	stmt, err := repo.db.Prepare(statement)
	if err != nil {
		log.Println(err)
		return nil, fmt.Errorf("%v : %v", db_error.StatementError, err)
	}
	defer stmt.Close()

	chat := &entity.Chat{}
	res, err := stmt.Exec(message, size, member_id, room_id, score)

	if err != nil {
		log.Println(err)
		return nil, fmt.Errorf("%v : %v", db_error.ExecError, err)
	}
	id, err := res.LastInsertId()

	if err != nil {
		return nil, fmt.Errorf("%v : %v", db_error.LastInsertError, err)
	}

	chat.Id = int(id)
	chat.Message = message
	chat.Size = size
	chat.MemberId = member_id
	chat.RoomId = room_id
	chat.Score = score

	return chat, nil
}

func (repo *ChatRepository) GetAllChat() ([]*entity.Chat, error) {
	statement := "SELECT * FROM chats"
	stmt, err := repo.db.Prepare(statement)

	if err != nil {
		log.Println(err)
		return nil, fmt.Errorf("%v : %v", db_error.StatementError, err)
	}

	defer stmt.Close()

	var chats []*entity.Chat
	rows, err := stmt.Query()

	if err != nil {
		return nil, fmt.Errorf("%v : %v", db_error.QueryrowError, err)
	}

	for rows.Next() {
		chat := &entity.Chat{}
		if err := rows.Scan(
			&chat.Id,
			&chat.Message,
			&chat.Size,
			&chat.RoomId,
			&chat.MemberId,
		); err != nil {
			log.Println(err)
			return nil, fmt.Errorf("%v : %v", db_error.RowsScanError, err)
		}

		chats = append(chats, chat)
	}

	err = rows.Err()
	if err != nil {
		log.Println(err)
		return nil, fmt.Errorf("%v : %v", db_error.RowsLoopError, err)
	}

	return chats, err
}
