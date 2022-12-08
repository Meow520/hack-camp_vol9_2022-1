import React, { useState } from "react";
import "../styles/App.css";

const GetURL = () => {
  
  return (
    <div className="w-screen h-screen bg-slate-300 justify-center flex text-center">
      <div className="w-1/2 h-128 bg-white my-auto rounded-2xl">
        <p className="text-6xl py-16 font-bold">Get URL</p>
        <p className="text-xl py-16">Share the URL with your friends!</p>
        <div className="py-10">
        <p className="text-3xl py-16">URL</p>
        </div>
      </div>
    </div>
  );
};

export default GetURL;