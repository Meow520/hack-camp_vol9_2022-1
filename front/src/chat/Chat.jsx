import React, { useState } from "react";
import Chatting from "./Chatting";
import UserSetting from "./UserSetting";

const Chat = () => {
  const [name, setName] = useState("");
  const [isStart, setIsStart] = useState(false);

  return (
    <>
      {isStart ? (
        <Chatting name={name}/>
      ) : (
        <UserSetting setName={setName} setIsStart={setIsStart} />
      )}
    </>
  );
};

export default Chat;
