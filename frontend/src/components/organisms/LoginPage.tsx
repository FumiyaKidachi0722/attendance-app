// /root/dev/attendance-app/frontend/src/components/organisms/LoginPage.tsx
import React from "react";
import LoginForm from "@components/molecules/LoginForm";
import useLogin from "@hooks/useLogin";
import { useUser } from "@context/UserContext";

const LoginPage: React.FC = () => {
  const { setUserName } = useUser();
  const { setPassword, validationError, handleLogin } = useLogin();

  return (
    <LoginForm
      onUserNameChange={(e) => setUserName(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onLoginClick={handleLogin}
      validationError={validationError}
    />
  );
};

export default LoginPage;
