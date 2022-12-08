import React, { useState } from "react";
import GetURL from "../components/roomSetting/GetUrl";
import CreateRoom from "../components/roomSetting/CreateRoom";
import  background  from "../images/triangle.png"

const RoomSetting = () => {
  const [gettingUrl, setGettingUrl] = useState(false);

  return (
    <div
      className="w-screen h-screen justify-center flex text-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      {gettingUrl ? <GetURL /> : <CreateRoom setGettingUrl={setGettingUrl} />};
    </div>
  );
};
export default RoomSetting;
