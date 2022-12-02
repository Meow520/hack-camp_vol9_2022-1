package database

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/Doer-org/hack-camp_vol9_2022-1/config"
)

func NewDB() (*sql.DB, error) {
	dbDSN, err := config.DSN()
	if err != nil {
		return nil, err
	}
	db, err := sql.Open("mysql", dbDSN)
	if err != nil {
		return nil, fmt.Errorf("failed to open MySQL : %w", err)
	}

	err = db.Ping()

	if err != nil {
		log.Println("データベース接続失敗")
		panic(err)
	} else {
		log.Println("データベース接続成功")
	}

	return db, err
}
