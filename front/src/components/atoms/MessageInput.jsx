import React, { useState, useEffect, useRef } from "react";

export const MessageInput = ({ member_id, room_id, sendMessage, messageHistory }) => {
  const [text, setText] = useState("");
  const [size, setSize] = useState("small");
  const inputRef = useRef();

  const handleSubmit = (messageHistory) => {
    const json = JSON.stringify({
      message: text,
      size: size,
      member_id: member_id,
      room_id: room_id,
      score: 0
    });
    sendMessage(json);
    clear();

  };
  const clear = () => {
    setText("");
    inputRef.current.value = "";
  };
  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing || e.key !== "Enter") return;
    handleSubmit(e);
  };

  

  return (
    <div className="mb-5 w-screen">
      <input
        type="text"
        className="w-2/3 h-10 rounded-2xl"
        onChange={(e) => {
          setText(e.target.value);
        }}
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
