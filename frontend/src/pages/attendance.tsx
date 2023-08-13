// pages/attendance.tsx
import React from "react";
import AttendancePage from "@components/organisms/AttendancePage";
import useRequireAuth from "@hooks/useRequireAuth";
import Loading from "@components/atoms/Loading";

const Attendance: React.FC = () => {
  const loading = useRequireAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>勤怠管理アプリ</h1>
      <AttendancePage />
    </div>
  );
};

export default Attendance;
