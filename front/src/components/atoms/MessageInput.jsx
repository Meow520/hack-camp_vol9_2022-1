import React, { useState, useRef } from "react";

export const MessageInput = ({ room_id, sendMessage, userId }) => {
  const [text, setText] = useState("");
  const size = "small";
  const inputRef = useRef();

  const handleSubmit = () => {
    const json = JSON.stringify({
      message: text,
      size: size,
      member_id: userId,
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
    <div className="w-screen">
      <input
        type="text"
        className="w-2/3 h-10 rounded-2xl bg-messagebox px-5 dark:bg-messagebox-dark dark:text-white"
        onChange={(e) => {
          setText(e.target.value);
        }}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        placeholder="message"
      />
    </div>
  );
};
