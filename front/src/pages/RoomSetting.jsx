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
    const submitData = {
      name: data.name,
      max_member: Number(data.max_member),
      member_count: 1,
    };
    data.memberCount = 1;
    await createRoom(submitData);
  };

  return (
    <TriangleContainer>
      <div className="w-1/2 h-128 bg-white my-auto rounded-2xl pb-10 dark:bg-gray-800">
        <p className="text-6xl py-12 font-bold dark:text-gray-200">Create a Room</p>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="max-w-screen-2xl px-4 md:px-8 mx-auto text-left xl:w-2/3"
            id="createEventForm"
          >
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
              name="max_member"
              options={{ required: "必須項目です" }}
              type="number"
              unit="人"
            />
            <div className="text-center mt-10">
              <Button
                label="ルームを作成"
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
