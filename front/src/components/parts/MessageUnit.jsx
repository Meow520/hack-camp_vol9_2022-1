import { useEffect, useState } from "react";
import { $axios } from "../../hooks/api/axios";

export const MessageUnit = ({ data }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [name, setName] = useState("");

  setTimeout(() => {
    setIsHidden(true);
  }, 6000);
  useEffect(() => {
    const getUserName = async () => {
      const response = await $axios
        .get(`/member/${data.member_id}`)
        .then((res) => {
          setName(res.data.data.name);
          return res.data;
        })
        .catch((err) => {
          console.log("err", err);
        });
      return response.data;
    };
    getUserName();
    console.log(name);
  }, []);
  return (
    <>
      {!isHidden && (
        <div className={`${data.randomLocation} ${"flex justify-center items-center animate-fade"}`}>
          {name}
          <span
            className={` ${
              data.fontSize
            } ${"bg-messagebox drop-shadow-xl rounded-full ml-2"} `}
          >
            {data ? data.message : null}
          </span>
        </div>
      )}
    </>
  );
};
