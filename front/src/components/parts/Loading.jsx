import React from "react";

const Loading = () => {
  const barWidth = "600px";
  return (
    <div className="w-screen h-screen flex justify-center bg-rose-50 dark:bg-indigo-900">
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
