import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { ChatContainer } from "../layout/ChatContainer";
import { MessageInput } from "../atoms/MessageInput";

export const Chatting = ({ id }) => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState(`ws://localhost:8080/ws/${id}`);
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      const message = JSON.parse(lastMessage.data);
      setMessageHistory((prev) => prev.concat(message));
      console.log(lastMessage.data);
    }
  }, [lastMessage, setMessageHistory]);

  const test_data = [
    { name: "neko", message: "眠たい" },
    { name: "inu", message: "それな" },
    { name: "yadon", message: "一生寝てたい" },
  ];

  const handleClickSendMessage = useCallback(() => {
    const json = JSON.stringify({
      message: "Hello",
      size: "small",
      member_id: 100,
      room_id: id,
      score: 0,
    });
    sendMessage(json);
    console.log(json);
  }, []);

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
        <div className="w-5/6 h-5/6 mx-auto bg-white my-5">
          <ul>
            {messageHistory.map((data, idx) => (
              <span key={idx}>{data ? data.message : null}</span>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <MessageInput />
        </div>
      </div>
    </ChatContainer>
  );
};
