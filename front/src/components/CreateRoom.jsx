import React, { useState } from "react";
import "../styles/App.css";

const CreateRoom = () => {
  return (
    <div class="w-screen h-screen bg-slate-300 justify-center flex text-center">
      <div class="w-1/2 h-128 bg-white my-auto rounded-2xl">
        <p class="text-6xl py-24 font-bold">Create Room!</p>
        <div class="py-20">
          <button 
          class="text-4xl text-black 
           w-52 h-24 my-auto
           bg-cyan-500 rounded-2xl hover:bg-cyan-300
           ">Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
