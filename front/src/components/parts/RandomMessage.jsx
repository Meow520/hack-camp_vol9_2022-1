import "../../styles/App.css";
import { useEffect, useState } from "react";
import { MessageUnit } from "./MessageUnit";

export const RandomMessage = ({ messageHistory, sendState, setSendState }) => {

  return (
    <div className="h-2/3 my-12">
      {messageHistory.map((data, idx) => (
        <div key={idx}>
          <MessageUnit data={data} idx={idx} />
        </div>
      ))}
    </div>
  );
};
