import { websocketAtom } from "./websocket";
import { messageListAtom } from "./messages";
import { useRecoilCallback, useRecoilValue } from "recoil";

export const useMessageList = () => {
  const socket = useRecoilValue(websocketAtom);
  const messageList = useRecoilValue(messageListAtom);

  const updateMessageList = useRecoilCallback(({ set }) => (message) => {
    set(messageListAtom, [...messageList, message]);
  });
  socket.onmessage = (msg) => {
    const content = JSON.parse(msg.data);
    const message = { content: content };
    updateMessageList(message);
  };

  return messageList;
};
