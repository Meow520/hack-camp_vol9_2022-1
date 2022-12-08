import React, { useState } from "react";
import GetURL from "./GetUrl";
import CreateRoom from "./CreateRoom";

const RoomSetting = () => {
  const [gettingUrl, setGettingUrl] = useState(false);

  return (
    <>
      {gettingUrl ? <GetURL /> : <CreateRoom setGettingUrl={setGettingUrl} />};
    </>
  );
};
export default RoomSetting;
