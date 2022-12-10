package persistance

import (
	"regexp"
	"testing"

	"github.com/DATA-DOG/go-sqlmock"
	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
)

func Test_NewRoom(t *testing.T) {
	t.Run(
		"Createが成功する",
		func(t *testing.T) {
			// Arrange
			testroom := &entity.Room{
				Id:          "testId",
				Name:        "testName",
				MaxMember:   5,
				MemberCount: 1,
			}
			db_test, mock, err := sqlmock.New()
			if err != nil {
				t.Error(err.Error())
			}
			defer db_test.Close()
			mock.ExpectPrepare(regexp.QuoteMeta("INSERT INTO rooms")).
				ExpectExec().
				WithArgs(testroom.Id, testroom.Name, testroom.MaxMember, testroom.MemberCount).
				WillReturnResult(sqlmock.NewResult(1, 1))

			r := &RoomRepository{db: db_test}
			_, err = r.NewRoom(testroom.Id, testroom.Name, testroom.MaxMember, testroom.MemberCount)

			if err != nil {
				t.Error(err.Error())
			}
		},
	)

}
