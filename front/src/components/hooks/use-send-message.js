import { useCallback, useState } from "react";
import { websocketAtom } from "./websocket";
import { useRecoilValue } from "recoil";

export const useSendMessage = () => {
  const socket = useRecoilValue(websocketAtom);
  const [input, setInput] = useState("");

  const send = useCallback(() => {
    if (input.length === 0) return;
    socket.send(JSON.stringify(input));
    setInput("");
  }, [input]);

  return { input, setInput, send };
};
