import React, { useState } from "react";
import "../../styles/App.css";
import { Button } from "../atoms/Button";
import { FormProvider, useForm } from "react-hook-form";
import { InputBlock } from "../atoms/InputBlock";
import { useUserSetting } from "../../hooks/api/useUserSetting";

export const UserSetting = ({ id, name, setName, setIsStart }) => {
  const { joinRoom } = useUserSetting();
  const methods = useForm();

  const onSubmit = async (data) => {
    // APIを叩く
    await joinRoom(data, id);
  };

  return (
    <div className="w-1/2 h-128 bg-white my-auto rounded-2xl pb-10">
      <p className="text-6xl py-12 font-bold">User Setting</p>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="max-w-screen-2xl px-4 md:px-8 mx-auto text-left xl:w-2/3"
          id="createEventForm">
          <InputBlock
            text="名前"
            subText="名前を入力してください"
            isRequired
            name="name"
            options={{ required: "必須項目です" }}
            type="text"
            placeholder="本田圭佑"
          />
          <div className="text-center mt-10">
            <Button
              label="チャットに参加"
              color="bg-sky-400 hover:bg-sky-200"
              type="submit"
              size="w-64 h-20 text-white text-3xl"
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
