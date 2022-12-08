import React, { useState } from "react";
import Chatting from "../components/chat/Chatting";
import UserSetting from "../components/chat/UserSetting";
import { RecoilRoot } from "recoil";

const Chat = () => {
  const [name, setName] = useState("");
  const [isStart, setIsStart] = useState(false);

  return (
    <>
      {isStart ? (
        <RecoilRoot>
          <Chatting name={name} />
        </RecoilRoot>
      ) : (
        <UserSetting setName={setName} setIsStart={setIsStart} />
      )}
    </>
  );
};

export default Chat;
