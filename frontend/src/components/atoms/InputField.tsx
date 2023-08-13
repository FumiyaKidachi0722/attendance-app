import React from "react";
import styles from "@styles/atoms/inputField.module.css";

type InputFieldProps = {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  onChange,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    className={styles["input-field"]}
  />
);

export default InputField;
