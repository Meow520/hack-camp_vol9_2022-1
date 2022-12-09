import React, { useState } from "react";
import Chatting from "../components/chat/Chatting";
import UserSetting from "../components/chat/UserSetting";

const Chat = () => {
  const [name, setName] = useState("");
  const [isStart, setIsStart] = useState(false);

  return (
    <>
      {isStart ? (
          <Chatting name={name} />
      ) : (
        <UserSetting setName={setName} name={name} setIsStart={setIsStart} />
      )}
    </>
  );
};

export default Chat;
