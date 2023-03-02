import { useEffect, useState } from "react";
import { $axios } from "../../hooks/api/axios";
import "../../styles/App.css";
import { MemberList } from "./MemberList";

export const Header = ({ id }) => {
  const [member, setMember] = useState([]);
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    const getEvent = async () => {
      const response = await $axios
        .get(`/member/room/${id}`)
        .then((res) => {
          setMember(res.data.data);
          return res.data;
        })
        .catch((err) => {
          console.log("err", err);
        });
      return response.data;
    };
    const getRoom = async () => {
      const response = await $axios
        .get(`/room/${id}`)
        .then((res) => {
          setRoomName(res.data.data.name);
          return res.data;
        })
        .catch((err) => {
          console.log("err", err);
        });
      return response.data;
    };
    getRoom();
    getEvent();
});
  return (
    <div className="text-xl text-gray-400 text-center font-bold bg-messagebox py-3 dark:bg-messagebox-dark">
      消えちゃっと - {roomName} 部屋
      <MemberList members={member} />
    </div>
  );
};
