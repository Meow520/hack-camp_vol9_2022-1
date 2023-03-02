import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import { useLocation, useParams } from "react-router-dom";
import { MessageInput } from "../components/atoms/MessageInput";
import { RandomMessage } from "../components/parts/RandomMessage";
import { randomLocationStyle } from "../constant/randomLocationStyle";
import { Header } from "../components/parts/Header";

export const Chat = () => {
  //idを取得
  const { id } = useParams();
  const location = useLocation();
  const socketUrl = `wss://hack-camp-vol9-2022-1-server-bk5ujqkiba-an.a.run.app/ws/${id}`;
  const [messageHistory, setMessageHistory] = useState([]);
  const { sendMessage, lastMessage } = useWebSocket(socketUrl);
  const [sendState, setSendState] = useState(false);

  useEffect(() => {
    if (lastMessage !== null) {
      const message = JSON.parse(lastMessage.data);
      message.randomLocation = randomLocationStyle();
      console.log(message.randomLocation);
      if (message.score < 0) {
        message.fontSize = "text-xs px-3 py-1";
      } else if (message.score < 0.3) {
        message.fontSize = "text-md px-4 py-1";
      } else if (message.score < 0.7) {
        message.fontSize = "text-2xl px-4 py-2";
      } else if (message.score < 0.85) {
        message.fontSize = "text-4xl px-6 py-3";
      } else {
        message.fontSize = "text-6xl px-10 py-4";
      }
      setMessageHistory((prev) => prev.concat(message));
      setSendState(true);
    }
  }, [lastMessage, setMessageHistory]);

  return (
    <div className="justify-center flex text-center">
      <div 
      className="w-screen h-screen bg-gradient-to-r from-salmon to-purple-red via-orange-pink 
      dark:from-purple-blue dark:to-deep-blue dark:via-ocean">
        <Header id={id} />
        <RandomMessage
          messageHistory={messageHistory}
          sendState={sendState}
          setSendState={setSendState}
        />
        <div className="flex justify-center">
          <MessageInput
            room_id={id}
            sendMessage={sendMessage}
            userId={location.state.id}
          />
        </div>
      </div>
    </div>
  );
};
