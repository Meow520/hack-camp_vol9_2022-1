package entity

import "time"

type Chat struct {
	Id        int
	Message   string
	Size      string
	MemberId  int
	RoomId    string
	Score     float64
	CreatedAt time.Time
}
type Chats []*Chat
