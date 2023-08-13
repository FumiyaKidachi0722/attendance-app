// components/molecules/AttendanceControls.tsx
import React from "react";
import AttendanceButton from "@components/atoms/AttendanceButton";

type AttendanceControlsProps = {
  onStart: () => void;
  onEnd: () => void;
};

const AttendanceControls: React.FC<AttendanceControlsProps> = ({
  onStart,
  onEnd,
}) => (
  <div>
    <AttendanceButton onClick={onStart}>出勤</AttendanceButton>
    <AttendanceButton onClick={onEnd}>退勤</AttendanceButton>
  </div>
);

export default AttendanceControls;
