import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Chatting } from "../components/chat/Chatting";
import { UserSetting } from "../components/chat/UserSetting";
import { ChatContainer } from "../components/layout/ChatContainer";
import { TriangleContainer } from "../components/layout/TriangleContainer";

export const Chat = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [isStart, setIsStart] = useState(false);

  return (
    <>
      {isStart ? (
        <ChatContainer>
          <Chatting name={name} />
        </ChatContainer>
      ) : (
        <TriangleContainer>
          <UserSetting id={id} setName={setName} name={name} setIsStart={setIsStart} />
        </TriangleContainer>
      )}
    </>
  );
};
