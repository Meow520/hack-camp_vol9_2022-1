package persistance

import (
	"database/sql"
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
		return nil, db_error.StatementError
	}
	defer stmt.Close()

	chat := &entity.Chat{}
	res, err := stmt.Exec(message, size, member_id, room_id, score)

	if err != nil {
		log.Println(err)
		return nil, db_error.ExecError
	}
	id, err := res.LastInsertId()

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
		return nil, db_error.StatementError
	}

	defer stmt.Close()

	var chats []*entity.Chat
	rows, err := stmt.Query()

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
			return nil, db_error.RowsScanError
		}

		chats = append(chats, chat)
	}

	return chats, err
}
