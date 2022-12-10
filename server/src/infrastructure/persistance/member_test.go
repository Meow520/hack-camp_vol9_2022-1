package persistance

import (
	"regexp"
	"testing"

	"github.com/DATA-DOG/go-sqlmock"
	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
)

func Test_CreateMember(t *testing.T) {
	t.Run(
		"Createが成功する",
		func(t *testing.T) {
			// Arrange
			testmember := &entity.Member{
				Name:   "testName",
				RoomId: "c1",
			}
			db_test, mock, err := sqlmock.New()
			if err != nil {
				t.Error(err.Error())
			}
			defer db_test.Close()
			mock.ExpectPrepare(regexp.QuoteMeta("INSERT INTO members")).
				ExpectExec().
				WithArgs(testmember.Name, testmember.RoomId).
				WillReturnResult(sqlmock.NewResult(1, 1))

			r := &MemberRepository{db: db_test}
			_, err = r.CreateMember(testmember.Name, testmember.RoomId)

			if err != nil {
				t.Error(err.Error())
			}
		},
	)

}
