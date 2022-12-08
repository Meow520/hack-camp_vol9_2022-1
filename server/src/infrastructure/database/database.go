package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"

	"github.com/Doer-org/hack-camp_vol9_2022-1/config"
)

func NewDB() (*sql.DB, error) {
	dbDSN, err := config.DSN()
	if err != nil {
		return nil, err
	}

	if os.Getenv("ENVIROMENT") == "prd" {
		dbDSN = os.Getenv("DSN")
	}

	db, err := sql.Open("mysql", dbDSN)
	if err != nil {
		return nil, fmt.Errorf("failed to open MySQL : %w", err)
	}

	err = db.Ping()

	if err != nil {
		log.Println("db connect error ")
		panic(err)
	}
	return db, err
}
