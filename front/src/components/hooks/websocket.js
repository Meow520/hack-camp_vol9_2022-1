import { atom, selector } from "recoil";
import * as WebSocket from "websocket";

const connect = () => {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket.w3cwebsocket("ws://localhost:80/ws");
    socket.onopen = () => {
      console.log("connected");
      resolve(socket);
    };
    socket.onclose = () => {
      console.log("reconnecting...");
      connect();
    };
    socket.onerror = (err) => {
      console.log("connection error:", err);
      reject(err);
    };
  });
};

const connectWebsocketSelector = selector({
  key: "connectWebsocket",
  get: async () => {
    return await connect();
  },
});

export const websocketAtom = atom({
  key: "websocket",
  default: connectWebsocketSelector,
});
