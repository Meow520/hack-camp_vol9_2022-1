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
        console.log('resのdata',res.data.data.id)
        navigate('/chat/' + id ,{
          state: { id: res.data.data.id},
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { joinRoom };
};
