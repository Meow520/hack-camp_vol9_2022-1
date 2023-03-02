import React from "react";
import "../styles/App.css";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useUserSetting } from "../hooks/api/useUserSetting";
import { InputBlock } from "../components/atoms/InputBlock";
import { Button } from "../components/atoms/Button";
import { TriangleContainer } from "../components/layout/TriangleContainer";


export const UserSetting = () => {
  const { id } = useParams();

  const { joinRoom } = useUserSetting();
  const methods = useForm();

  const onSubmit = async (data) => {
    // APIを叩く
    await joinRoom(data, id);
  };

  return (
    <TriangleContainer>
    <div className="w-1/2 h-128 bg-white my-auto rounded-2xl pb-10 dark:bg-gray-800">
      <p className="text-6xl py-12 font-bold dark:text-gray-200">User Setting</p>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="max-w-screen-2xl px-4 md:px-8 mx-auto text-left xl:w-2/3"
          id="createEventForm"
        >
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
              color="bg-rose-600 hover:bg-rose-400 dark:bg-indigo-700 dark:hover:bg-indigo-500"
              type="submit"
              size="w-64 h-20 text-white text-3xl"
            />
          </div>
        </form>
      </FormProvider>
    </div>
    </TriangleContainer>
  );
};