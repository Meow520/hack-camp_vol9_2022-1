import React, { useState, useEffect, useCallback } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useLocation, useParams } from "react-router-dom";
import { MessageInput } from "../components/atoms/MessageInput";
import { ChatContainer } from "../components/layout/ChatContainer";
import { RandomMessage } from "../components/parts/RandomMessage";
import { randomLocationStyle } from "../constant/randomLocationStyle";
import { Header } from "../components/parts/Header";
import { generateFontSize } from "../constant/generateFontSize";
import { $axios } from "../hooks/api/axios";
import { MemberList } from "../components/parts/MemberList";

export const Chat = () => {
  const { id } = useParams();
  const location = useLocation();
  //idを取得

  const [socketUrl, setSocketUrl] = useState(
    `wss://hack-camp-vol9-2022-1-server-bk5ujqkiba-an.a.run.app/ws/${id}`
  );
  const [messageHistory, setMessageHistory] = useState([]);
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const [sendState, setSendState] = useState(false);
  // const [member, setMember] = useState([]);
  // const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (lastMessage !== null) {
      const message = JSON.parse(lastMessage.data);
      message.randomLocation = randomLocationStyle();
      if (message.score < 0) {
        message.fontSize = "text-xl";
      }
      if (message.score < 0.3) {
        message.fontSize = "text-2xl";
      } else if (message.score < 0.7) {
        message.fontSize = "text-3xl";
      } else if (message.score < 0.85) {
        message.fontSize = "text-4xl";
      } else {
        message.fontSize = "text-6xl";
      }
      // message.date = new Date();

      // const getUserName = async () => {
      //   const response = await $axios
      //     .get(`/room/${id}`)
      //     .then((res) => {
      //       setRoomName(res.data.data.name);
      //       return res.data;
      //     })
      //     .catch((err) => {
      //       console.log("err", err);
      //     });
      //   return response.data;
      // };
      // getRoom();;

      // setTimeout(((message)=>{message.hidden = true}), 3*1000)
      setMessageHistory((prev) => prev.concat(message));
      setSendState(true);
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
        <Header id={id} />
        {/* <div className="pt-2 pr-2 pl-auto">
          <MemberList member={member} />
        </div> */}
        <RandomMessage
          messageHistory={messageHistory}
          sendState={sendState}
          setSendState={setSendState}
          // userName={userName}
        />
        <div className="flex justify-center">
          <MessageInput
            room_id={id}
            sendMessage={sendMessage}
            userId={location.state.id}
          />
        </div>
      </div>
    </ChatContainer>
  );
};
