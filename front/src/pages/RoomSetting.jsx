import { Button } from "../components/atoms/Button";
import { TriangleContainer } from "../components/layout/TriangleContainer";
import { FormProvider, useForm } from "react-hook-form";
import { useRoomSetting } from "../hooks/api/useRoomSetting";
import { InputBlock } from "../components/atoms/InputBlock";

export const RoomSetting = () => {
  const { createRoom } = useRoomSetting();
  const methods = useForm();

  const onSubmit = async (data) => {
    // APIを叩く
    await createRoom(data);
  };

  return (
    <TriangleContainer>
      <div className="w-1/2 h-128 bg-white my-auto rounded-2xl pb-10">
        <p className="text-6xl py-12 font-bold">Create a Room</p>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="max-w-screen-2xl px-4 md:px-8 mx-auto text-left xl:w-2/3"
            id="createEventForm">
            <InputBlock
              text="チャット名"
              subText="チャットの名前を入力してください"
              isRequired
              name="name"
              options={{ required: "必須項目です" }}
              type="text"
              placeholder="日本vsクロアチア"
            />
            <InputBlock
              text="人数"
              subText="参加者の最大人数を入力してください"
              isRequired
              name="maxMember"
              options={{ required: "必須項目です" }}
              type="number"
              unit="人"
            />
            <div className="text-center mt-10">
              <Button
                label="create"
                color="bg-sky-400 hover:bg-sky-200"
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
