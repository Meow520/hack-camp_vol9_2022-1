import React from "react";
import "../../styles/App.css";

const CreateRoom = ({ setGettingUrl }) => {
  const handleSubmit = () => {
    setGettingUrl(true);
  };

  return (
    <div className="w-screen h-screen bg-slate-300 justify-center flex text-center">
      <div className="w-1/2 h-128 bg-white my-auto rounded-2xl">
        <p className="text-6xl py-24 font-bold">Create a Room</p>
        <div className="py-20">
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-4xl text-black 
           w-52 h-24 my-auto
           bg-cyan-500 rounded-2xl hover:bg-cyan-300
           "
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
