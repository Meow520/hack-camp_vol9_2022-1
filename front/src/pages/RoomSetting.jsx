import React, { useState } from "react";
import GetURL from "../components/roomSetting/GetUrl";
import CreateRoom from "../components/roomSetting/CreateRoom";

const RoomSetting = () => {
  const [gettingUrl, setGettingUrl] = useState(false);

  return (
    <>
      {gettingUrl ? <GetURL /> : <CreateRoom setGettingUrl={setGettingUrl} />};
    </>
  );
};
export default RoomSetting;
