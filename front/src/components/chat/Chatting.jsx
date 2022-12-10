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
      setMessageHistory((prev) => prev.concat(lastMessage));
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
      size: 5,
      member_id: "ablidfcb",
      room_id: id,
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
      <div className="w-screen">
        <div>
          <button
            onClick={handleClickSendMessage}
            disabled={readyState !== ReadyState.OPEN}
          >
            Click Me to send 'Hello'
          </button>
          <span>The WebSocket is currently {connectionStatus}</span>
          {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
          <ul>
            {messageHistory.map((message, idx) => (
              <div key={idx}>
                {/* <p className="text-lg">{data.name}</p> */}
                <p className="text-2xl">{message}</p>
              </div>
            ))}
          </ul>
        </div>
        <MessageInput />
      </div>
    </ChatContainer>
  );
};
