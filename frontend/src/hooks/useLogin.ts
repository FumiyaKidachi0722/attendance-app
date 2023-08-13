// hooks/useLogin
import { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@context/UserContext";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "@apollos/queries/login";
import { ToastNotification } from "@components/atoms/ToastNotification";
import { validateUserName, validatePassword } from "@utils/validation";

const useLogin = () => {
  const { userName, setUserName } = useUser();
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setError] = useState("");
  const router = useRouter();
  const [validationError, setValidationError] = useState<string | null>(null);

  const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION);

  const handleLogin = async () => {
    if (!userName) {
      setValidationError("ユーザー名は必須です。");
      return;
    }
    let errorMessage = "";
    const userNameError = validateUserName(userName);
    const passwordError = validatePassword(password);

    if (userNameError) errorMessage += userNameError;
    if (passwordError) errorMessage += passwordError;

    if (errorMessage) {
      setValidationError(errorMessage);
      return;
    }

    try {
      const { data } = await loginMutation({
        variables: { userName, password },
      });

      if (data.login && data.login.userName) {
        console.log("Login successful");
        setIsLoggedIn(true);
        setUserName(data.login.userName);
        setError("");
        ToastNotification({
          message: "ログインに成功しました。",
          type: "info",
        });
        router.push("/attendance");
      } else {
        console.log("Login failed");
      }
    } catch (err) {
      setError("");
      console.log("Login error:", err);
      setError("ログインに失敗しました。");
      ToastNotification({
        message: "ログインに失敗しました。",
        type: "error",
      });
    }
  };

  return {
    validationError,
    password,
    setPassword,
    isLoggedIn,
    loginError,
    handleLogin,
  };
};

export default useLogin;
