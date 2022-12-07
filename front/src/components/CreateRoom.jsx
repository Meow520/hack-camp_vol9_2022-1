import React, { useState } from "react";
import "../styles/App.css";

const CreateRoom = () => {
  return (
    <div class="w-screen h-screen bg-slate-300 justify-center flex text-center">
      <div class="w-1/2 h-3/5 bg-white my-auto rounded-2xl">
        <p class="text-6xl pt-16">Create Room</p>
        <div class="py-28">
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
