import { useState } from "react";

export const MessageUnit = ({ data, idx }) => {
  const [isHidden, setIsHidden] = useState(false);
  setTimeout(() => {
    setIsHidden(true);
  }, 3000);

  return (
    <>
      {!isHidden && (
        <span
          className={`${data.randomLocation} ${
            data.fontSize
          } ${"bg-white rounded-2xl px-3 transition-opacity ease-in duration-700 opacity-100"}`}
        >
          {data ? data.message : null}
        </span>
      )}
    </>
  );
};
