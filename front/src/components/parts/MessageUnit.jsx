import { useEffect, useState } from "react";
import { $axios } from "../../hooks/api/axios";

export const MessageUnit = ({ data, idx }) => {
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
        <p className={`${data.randomLocation}`}>
          {name}
          <span
            className={` ${
              data.fontSize
            } ${"bg-white rounded-2xl px-3 transition-opacity ease-in duration-700 opacity-100"} `}
          >
            {data ? data.message : null}
          </span>
        </p>
      )}
    </>
  );
};
