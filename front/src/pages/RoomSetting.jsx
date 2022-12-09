import React, { useState } from "react";
import GetURL from "../components/roomSetting/GetUrl";
import CreateRoom from "../components/roomSetting/CreateRoom";
import background from "../images/triangle.png";
import { $axios } from "../components/hooks/api/axios";


const RoomSetting = () => {
  const [gettingUrl, setGettingUrl] = useState(false);
  const [id, setId] = useState("")

  const handleSubmit = async () => {
    await $axios
      .post("room/create")
      .then((res) => {
        // setId(res.data.id)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    setGettingUrl(true);
  };


  return (
    <div
      className="w-screen h-screen justify-center flex text-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      {gettingUrl ? <GetURL id={id}/> : <CreateRoom handleSubmit={handleSubmit} />}
    </div>
  );
};
export default RoomSetting;
