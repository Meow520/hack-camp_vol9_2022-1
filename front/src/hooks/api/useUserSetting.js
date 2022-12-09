import { $axios } from "./axios";

export const useUserSetting = () => {
  const joinRoom = async (data) => {
    await $axios
      .post("/member/create", {
        name: data.name,
        roomId: data.roomId,
      })
      .then((res) => {
        //画面遷移するならここでnavigate
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { joinRoom };
};
