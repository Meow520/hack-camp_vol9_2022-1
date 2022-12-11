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
  }, []);
  return (
    <div className="text-xl text-white text-center font-bold bg-blue-700 opacity-80 py-3">
      消えちゃっと - {roomName} room
      <MemberList member={member} />
    </div>
  );
};
