import React, { useState } from "react";
import "../../styles/App.css";
import { Button } from "../atoms/Button";
import background from "../../images/triangle.png"

const UserSetting = ({ setName, setIsStart }) => {
  const handleStart = () => {
    setIsStart(true);
  };

  return (
    <div
      className="w-screen h-screen justify-center flex text-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div class="w-1/2 h-128 bg-white my-auto rounded-2xl">
        <p class="text-6xl py-24 font-bold">User Setting</p>
        <div>
          <input
            type="text"
            placeholder="user name"
            className="text-2xl w-1/2 h-16 border rounded-md"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="py-20">
        <Button 
          label="chat"
          color="bg-sky-400 hover:bg-sky-200"
          type="submit"
          onClick={handleStart}
          size="w-64 h-20 text-white text-3xl"
           />
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
