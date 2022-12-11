import React, { useState, useEffect, useCallback } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useParams } from "react-router-dom";
import { MessageInput } from "../components/atoms/MessageInput";
import { ChatContainer } from "../components/layout/ChatContainer";
import { RandomMessage } from "../components/parts/RandomMessage";
import { randomLocationStyle } from "../constant/randomLocationStyle";
import { Header } from "../components/parts/Header";
import { generateFontSize } from "../constant/generateFontSize";

export const Chat = () => {
  const { id } = useParams();

  const [socketUrl, setSocketUrl] = useState(
    `ws://hack-camp-vol9-2022-1-server-bk5ujqkiba-an.a.run.app/ws/${id}`
  );
  const [messageHistory, setMessageHistory] = useState([]);
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const [sendState, setSendState] = useState(false);

  useEffect(() => {
    if (lastMessage !== null) {
      const message = JSON.parse(lastMessage.data);
      message.randomLocation = randomLocationStyle();
      if (message.score < 0) {
        message.fontSize = "text-xl text-red-400";
      }
      if (message.score < 0.3) {
        message.fontSize = "text-xl text-red-400";
      } else if (message.score < 0.7) {
        message.fontSize = "text-2xl";
      } else if (message.score < 0.85) {
        message.fontSize = "text-4xl";
      } else {
        message.fontSize = "text-6xl";
      }
      // message.date = new Date();
      message.hidden = false;
      console.log(message);
      // setTimeout(((message)=>{message.hidden = true}), 3*1000)
      setMessageHistory((prev) => prev.concat(message));
      setSendState(true);
    }
  }, [lastMessage, setMessageHistory]);

  // setInterval(() => {
  //   const now_time = new Date();
  //   const new_messageHistory = messageHistory.filter((message) => {
  //     return (now_time - message.date) <= 10000;
  //   });
  //   setMessageHistory(new_messageHistory);
  // }, 1000);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <ChatContainer>
      <Header />
      <div className="w-screen h-screen">
        <span>The WebSocket is currently {connectionStatus}</span>
        <RandomMessage
          messageHistory={messageHistory}
          sendState={sendState}
          setSendState={setSendState}
        />
        <div className="flex justify-center">
          <MessageInput member_id={1} room_id={id} sendMessage={sendMessage} />
        </div>
      </div>
    </ChatContainer>
  );
};
