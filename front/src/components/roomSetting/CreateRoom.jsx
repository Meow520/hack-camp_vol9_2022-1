import React from "react";
import "../../styles/App.css";
import { Button } from "../atoms/Button";

const CreateRoom = ({ setGettingUrl }) => {
  const handleSubmit = () => {
    setGettingUrl(true);
  };

  return (
    <div className="w-1/2 h-128 bg-white my-auto rounded-2xl">
      <p className="text-6xl py-24 font-bold">Create a Room</p>
      <div className="pb-20">
        {/* <button
            type="submit"
            onClick={handleSubmit}
            className="text-4xl text-black 
           w-52 h-24 my-auto
           bg-cyan-500 rounded-2xl hover:bg-cyan-300
           "
          >
            Create
          </button> */}
        <Button 
          label="create"
          color="bg-sky-400 hover:bg-sky-200"
          type="submit"
          onClick={handleSubmit}
          size="w-64 h-20 text-white text-3xl"
           />
      </div>
    </div>
  );
};

export default CreateRoom;
