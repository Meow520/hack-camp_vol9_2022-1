import React, { useState } from "react";
import "../../styles/App.css";
// import QRCode from "qrcode.react";

const GetURL = ({id}) => {
  const url = `https://hogehoge.vercel.app/chat/${id}`;
  const [visible, setVisible] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setVisible(true);
  };

  return (
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
          <button
            className="text-xl text-slate-500 bg-slate-50 hover:bg-slate-200 w-32 h-18 border rounded-sm"
            onClick={copy}
          >
            Copy
          </button>
          {/* <div className="mb-20 flex justify-center">
            <QRCode value="https://github.com/Meow520" />
          </div> */}
        </div>
        {visible && <p className="text-xl">Copied</p>}
      </div>
    </div>
  );
};

export default GetURL;
