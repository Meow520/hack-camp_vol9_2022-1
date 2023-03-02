import React from "react";
import charactor from "../../images/kiechatta.png";

const Loading = () => {
  const barWidth = "600px";
  return (
    <div className="w-screen h-screen flex justify-center bg-rose-100 dark:bg-indigo-900">
      <div>
        <img src={charactor} alt="kiechatta" className="w-20 absolute animate-loading-charactor"/>
      </div>
      <div
        className="h-12 my-auto rounded-full bg-slate-300"
        style={{ width: `${barWidth}` }}
      >
        <div className="h-8 m-2 rounded-full bg-rose-300 dark:bg-indigo-500 text-center text-xl font-bold text-gray-50 animate-loading"></div>
      </div>
    </div>
  );
};

export default Loading;
