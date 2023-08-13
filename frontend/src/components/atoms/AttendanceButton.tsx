// components/atoms/AttendanceButton.tsx
import React from "react";
import styles from "@/styles/atoms/attendanceButton.module.css"; // スタイルのインポート

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const AttendanceButton: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button className={styles["attendance-button"]} onClick={onClick}>
    {children}
  </button>
);

export default AttendanceButton;
