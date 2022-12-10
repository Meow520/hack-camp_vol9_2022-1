import "../../styles/App.css";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";

export const RandomMessage = ({ messageHistory, sendState, setSendState }) => {
  const [trigger, setTrigger] = useState(true);
  const styles = useSpring({
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  });
  useEffect(() => {
    setTimeout(() => {
      // 配列から先頭の要素を削除する
      messageHistory.shift();
      setTrigger(!trigger);
      setSendState(false);
    }, 3000);
  },[sendState]);
  return (
    <div className="h-5/6 my-5">
      {trigger &&
        messageHistory.map((data, idx) => (
          // <animated.div style={styles} key={idx}>
          <span
            className={`${data.randomLocation} ${
              data.fontSize
            } ${"bg-white rounded-2xl px-3 transition-opacity ease-in duration-700 opacity-100"}`}
            key={idx}
            hidden={data.hidden}
          >
            {data ? data.message : null}
          </span>
          // </animated.div>
        ))}
      {!trigger &&
        messageHistory.map((data, idx) => (
          // <animated.div style={styles} key={idx}>
          <span
            className={`${data.randomLocation} ${
              data.fontSize
            } ${"bg-white rounded-2xl px-3 transition-opacity ease-in duration-700 opacity-100"}`}
            key={idx}
            hidden={data.hidden}
          >
            {data ? data.message : null}
          </span>
          // </animated.div>
        ))}
    </div>
  );
};
