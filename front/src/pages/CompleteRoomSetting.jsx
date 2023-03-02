import { useState } from "react";
import { useLocation } from "react-router-dom";
import { TriangleContainer } from "../components/layout/TriangleContainer";

export const CompleteRoomSetting = () => {
  const location = useLocation();
  //idを取得
  const id = location.state.id;
  const name = location.state.name;
  const url = `http://localhost:3000/join/${id}`;
  const [visible, setVisible] = useState(false);

  // `https://kie-chat.vercel.app/join/${id}`

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setVisible(true);
  };
  return (
    <TriangleContainer>
      <div className="w-1/2 h-128 bg-white my-auto rounded-2xl dark:bg-gray-800 animate-fadein">
        <p className="text-6xl pt-20 pb-10 font-bold text-gray-600 dark:text-gray-200">
          設定完了
        </p>
        <div className="pb-20 pt-5">
          <div className="pb-6 w-54 text-center my-3">
            <a
              href={url}
              className="text-2xl py-3 px-5 h-18 border rounded-lg bg-rose-500 text-gray-100 hover:bg-rose-300 dark:bg-indigo-700 dark:hover:bg-indigo-500"
            >
              {name}の部屋に入る
            </a>
          </div>
          <div>
            <button
              className="text-xl text-slate-500 bg-slate-50 hover:bg-slate-200 w-32 h-18 border rounded-md dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-300"
              onClick={copy}
            >
              URLをコピー
            </button>
            {visible && (
              <p className="text-rose-500 text-xl mt-2">URLをコピーしました</p>
            )}
          </div>
        </div>
      </div>
    </TriangleContainer>
  );
};
