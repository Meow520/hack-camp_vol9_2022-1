import { useNavigate } from "react-router-dom";
import { $axios } from "./axios";

export const useRoomSetting = () => {
  const navigate = useNavigate();

  const createRoom = async (data) => {
    await $axios
      .post("/room/create", data)
      .then((res) => {
        console.log(res);
        navigate("/complete", {
          state: { id: res.data.id },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { createRoom };
};
