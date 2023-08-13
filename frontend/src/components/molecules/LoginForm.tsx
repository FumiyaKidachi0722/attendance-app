// /root/dev/attendance-app/frontend/src/components/molecules/LoginForm.tsx
import React from "react";
import InputField from "@components/atoms/InputField";
import LogInButton from "@components/atoms/LogInButton";
import ErrorTooltip from "@components/atoms/ErrorTooltip";

type LoginFormProps = {
  onUserNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLoginClick: () => void;
  validationError: string | null;
};

const LoginForm: React.FC<LoginFormProps> = ({
  onUserNameChange,
  onPasswordChange,
  onLoginClick,
  validationError,
}) => {
  return (
    <>
      <div>
        <InputField
          type="text"
          placeholder="ユーザー名"
          onChange={onUserNameChange}
        />
        <InputField
          type="password"
          placeholder="パスワード"
          onChange={onPasswordChange}
        />
        <LogInButton onClick={onLoginClick}>ログイン</LogInButton>
      </div>
      <ErrorTooltip message={validationError} />
    </>
  );
};

export default LoginForm;
