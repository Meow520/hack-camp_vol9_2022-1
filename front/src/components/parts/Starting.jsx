import React from "react";
import charactor from "../../images/kiechatta.png";

const Starting = () => {
  return (
    <div className="w-screen h-screen flex justify-center animate-starting">
      <div className="my-auto text-5xl font-bold animate-starting-logo">
        <img src={charactor} alt="kiechatta" className="w-80" />
        <div className="text-5xl font-bold text-center">消えちゃっと</div>
        <div className="text-sm text-center">produce by Do'er violet</div>
      </div>
    </div>
  );
};

export default Starting;
