package persistance

import (
	"regexp"
	"testing"
	"time"

	"github.com/DATA-DOG/go-sqlmock"
	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
)

func Test_CreateChat(t *testing.T) {
	t.Run(
		"Createが成功する",
		func(t *testing.T) {
			// Arrange
			testchat := &entity.Chat{
				Message:   "testMessage",
				Size:      "mid",
				MemberId:  1,
				RoomId:    "c1",
				Score:     0,
				CreatedAt: time.Now(),
			}
			db_test, mock, err := sqlmock.New()
			if err != nil {
				t.Error(err.Error())
			}
			defer db_test.Close()
			mock.ExpectPrepare(regexp.QuoteMeta("INSERT INTO chats")).
				ExpectExec().
				WithArgs(testchat.Message, testchat.Size, testchat.MemberId, testchat.RoomId, testchat.Score, testchat.CreatedAt).
				WillReturnResult(sqlmock.NewResult(1, 1))

			r := &ChatRepository{db: db_test}
			_, err = r.CreateChat(testchat.Message, testchat.Size, testchat.MemberId, testchat.RoomId, testchat.Score)

			if err != nil {
				t.Error(err.Error())
			}
		},
	)

}
