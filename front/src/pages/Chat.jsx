import React, { useState, useEffect, useCallback } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useParams } from "react-router-dom";
import { MessageInput } from "../components/atoms/MessageInput";
import { ChatContainer } from "../components/layout/ChatContainer";
import { RandomMessage } from "../components/parts/RandomMessage";
import { randomLocationStyle } from "../constant/randomLocationStyle";

export const Chat = () => {
  const { id } = useParams();

  const [socketUrl, setSocketUrl] = useState(`ws://localhost:8080/ws/${id}`);
  const [messageHistory, setMessageHistory] = useState([]);
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      const message = JSON.parse(lastMessage.data);
      message.randomLocation = randomLocationStyle();
      console.log(message);
      setMessageHistory((prev) => prev.concat(message));
    }
  }, [lastMessage, setMessageHistory]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <ChatContainer>
      <div className="w-screen h-screen">
        <span>The WebSocket is currently {connectionStatus}</span>
        <RandomMessage messageHistory={messageHistory} />
        <div className="flex justify-center">
          <MessageInput
            member_id={100}
            room_id={id}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </ChatContainer>
  );
};
