// hooks/useRequireAuth.ts
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@context/UserContext";

const useRequireAuth = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { userName } = useUser();

  useEffect(() => {
    // ここでログイン状態を非同期にチェック
    const checkLogin = async () => {
      const isLoggedIn = userName ? true : false;
      if (!isLoggedIn) {
        // ログインしていない場合、ログインページにリダイレクト
        router.push("/");
      }
      setLoading(false);
    };

    checkLogin();
  }, []);

  return loading;
};

export default useRequireAuth;
