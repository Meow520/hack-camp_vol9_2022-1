package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"time"
)

func DoGoogleNLPAPI(message string) (*GoogleNLP, error) {
	url := "https://language.googleapis.com/v1/documents:analyzeSentiment?key="
	key := os.Getenv("APIKEY")

	client := &http.Client{
		Timeout: 20 * time.Second,
	}

	str := fmt.Sprintf(`{"document": {
		"type":     "PLAIN_TEXT",
		"language": "JA",
		"content":  "%s",
	},
	"encodingType": "UTF8"}`, message)

	body := []byte(str)
	buf := bytes.NewBuffer(body)

	req, err := http.NewRequest("POST", url+key, buf)

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	Respon := &GoogleNLP{}

	if err := json.Unmarshal(data, &Respon); err != nil {
		log.Fatal(err)
	}

	return Respon, nil

}

type GoogleNLP struct {
	DocumentSentiment struct {
		Magnitude float64 `json:"magnitude"`
		Score     float64 `json:"score"`
	} `json:"documentSentiment"`
	Language  string `json:"language"`
	Sentences []struct {
		Text struct {
			Content     string `json:"content"`
			BeginOffset int    `json:"beginOffset"`
		} `json:"text"`
		Sentiment struct {
			Magnitude float64 `json:"magnitude"`
			Score     float64 `json:"score"`
		} `json:"sentiment"`
	} `json:"sentences"`
}
