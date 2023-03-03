import { useNavigate } from "react-router-dom";
import { $axios } from "./axios";

export const useRoomSetting = () => {
  const navigate = useNavigate();

  const createRoom = async (data) => {
    console.log(data)
    await $axios
      .post("/room/create", data)
      .then((res) => {
        navigate("/complete", {
          state: { id: res.data.data.id,
          name: res.data.data.name },
        });
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };
  return { createRoom };
};
