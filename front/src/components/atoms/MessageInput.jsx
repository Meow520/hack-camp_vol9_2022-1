import React, { useState, useCallback, useEffect } from "react";

export const MessageInput = ({ member_id, room_id, sendMessage }) => {
  const [text, setText] = useState("");
  const [size, setSize] = useState("small");

  const handleSendMessage = useCallback(() => {
    const json = JSON.stringify({
      message: text,
      size: size,
      member_id: member_id,
      room_id: room_id,
      score: 0,
    });
    sendMessage(json);
    console.log(json);
  }, []);
  return (
    <div className="mb-5 w-screen">
      <input type="text" className="w-2/3 h-10 rounded-2xl " />
    </div>
  );
};
