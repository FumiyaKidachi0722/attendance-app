import { useState } from "react";
import { useUser } from "@context/UserContext";
import { useMutation } from "@apollo/client";
import { START_WORK_MUTATION } from "@apollos/queries/startWork";
import { END_WORK_MUTATION } from "@apollos/queries/endWork";
import { ToastNotification } from "@components/atoms/ToastNotification";

const useAttendance = () => {
  const { userName } = useUser();
  const [startWork] = useMutation(START_WORK_MUTATION, {
    onError: () => {
      ToastNotification({
        message: "出勤の記録に失敗しました。",
        type: "error",
      });
    },
  });
  const [endWork] = useMutation(END_WORK_MUTATION, {
    onError: () => {
      ToastNotification({
        message: "退勤の記録に失敗しました。",
        type: "error",
      });
    },
  });

  const handleStartWork = () => {
    const time = new Date().toISOString();
    console.log("userName: ", userName);
    startWork({
      variables: { userName, time },
    }).then(() => {
      ToastNotification({
        message: "出勤の記録に成功しました。",
        type: "info",
      });
    });
  };

  const handleEndWork = () => {
    const time = new Date().toISOString();
    endWork({
      variables: { userName, time },
    }).then(() => {
      ToastNotification({
        message: "退勤の記録に成功しました。",
        type: "info",
      });
    });
  };

  return {
    handleStartWork,
    handleEndWork,
  };
};

export default useAttendance;
