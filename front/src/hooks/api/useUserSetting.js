import { $axios } from "./axios";
import { useNavigate } from "react-router-dom";

export const useUserSetting = () => {
  const navigate = useNavigate();
  const joinRoom = async (data, id) => {
    await $axios
      .post("/member/create", {
        name: data.name,
        room_id: id,
      })
      .then((res) => {
        //画面遷移するならここでnavigate
        console.log(res);
        navigate('/chat/' + id)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { joinRoom };
};
