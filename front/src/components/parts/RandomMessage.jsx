import "../../styles/App.css";
import { useEffect, useState } from "react";
import { MessageUnit } from "./MessageUnit";

export const RandomMessage = ({ messageHistory, sendState, setSendState }) => {
  // const [trigger, setTrigger] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     // 配列から先頭の要素を削除する
  //     messageHistory.shift();
  //     setTrigger(!trigger);
  //     setSendState(false);
  //   }, 3000);
  // },[sendState]);

  return (
    <div className="h-5/6 my-5">
      {messageHistory.map((data, idx) => (
        <div key={idx}>
          <MessageUnit data={data} idx={idx} />
        </div>
      ))}
    </div>
  );
};
