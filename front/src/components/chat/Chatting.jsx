import { MessageInput } from "./MessageInput";
import { MessageList } from "./MessageList";

const Chatting = () => {
  return (
    <div>
      <h1>Simple Chat</h1>
      <MessageInput />
      <MessageList />
    </div>
  );
};
export default Chatting