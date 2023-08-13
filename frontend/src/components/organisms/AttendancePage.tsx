import React, { useState, useEffect } from "react";
import useAttendance from "@hooks/useAttendance";
import AttendanceControls from "@components/molecules/AttendanceControls";
import { ErrorMessage } from "@components/atoms/ErrorMessage";

const AttendancePage: React.FC = () => {
  const { handleStartWork, handleEndWork } = useAttendance();
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString()); // 現在の日付と時間を状態として保持

  // 1秒ごとに現在時刻を更新する効果
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    // コンポーネントのクリーンアップ時にタイマーをクリア
    return () => clearInterval(timer);
  }, []); // 空の依存配列を渡して、この効果がマウントとアンマウント時にのみ実行されるようにする

  return (
    <div>
      <p>現在時刻: {currentTime}</p>
      <AttendanceControls onStart={handleStartWork} onEnd={handleEndWork} />
    </div>
  );
};

export default AttendancePage;
