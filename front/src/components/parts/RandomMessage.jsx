import "../../styles/App.css";
import { MessageUnit } from "./MessageUnit";

export const RandomMessage = ({
  messageHistory,
  userName,
}) => {
  return (
    <div className="h-3/4 mt-12 mb-9">
      {messageHistory.map((data, idx) => (
        <div key={idx}>
          <MessageUnit data={data} idx={idx} userName={userName} />
        </div>
      ))}
    </div>
  );
};
