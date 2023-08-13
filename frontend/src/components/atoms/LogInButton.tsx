import React from "react";
import styles from "@styles/atoms/logInButton.module.css";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const LogInButton: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button className={styles["button"]} onClick={onClick}>
    {children}
  </button>
);

export default LogInButton;
