import "../../styles/App.css";
import { MessageUnit } from "./MessageUnit";

export const RandomMessage = ({
  messageHistory,
  userName,
}) => {
  return (
    <div className="h-2/3 my-12">
      {messageHistory.map((data, idx) => (
        <div key={idx}>
          <MessageUnit data={data} idx={idx} userName={userName} />
        </div>
      ))}
    </div>
  );
};
