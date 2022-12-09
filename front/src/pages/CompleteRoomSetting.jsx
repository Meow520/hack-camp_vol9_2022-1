import { useState } from "react";
import { useLocation } from "react-router-dom";
import { TriangleContainer } from "../components/layout/TriangleContainer";

export const CompleteRoomSetting = () => {
  const location = useLocation();
  //idを取得
  const id = location.state.id;
  const url = `https://hogehoge.vercel.app/chat/${id}`;
  const [visible, setVisible] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setVisible(true);
  };

  return (
    <TriangleContainer>
      <div className="w-1/2 h-128 bg-white my-auto rounded-2xl">
        <p className="text-6xl pt-24 pb-6 font-bold">Get URL</p>
        <p className="text-xl">Share the URL with your friends!</p>
        <div className="pb-20 pt-5">
          <div className="pb-6">
            <a href={url} className="text-2xl p-3 h-18">
              {url}
            </a>
          </div>
          <div>
            {visible && <p className="text-red-500 text-xl mb-5">Copied</p>}
            <button
              className="text-xl text-slate-500 bg-slate-50 hover:bg-slate-200 w-32 h-18 border rounded-sm"
              onClick={copy}>
              Copy
            </button>
          </div>
        </div>
      </div>
    </TriangleContainer>
  );
};
