// context/userContext.ts
import React, { createContext, useContext, useState } from "react";

// コンテキストの型定義
type UserContextType = {
  userName: string | null;
  setUserName: React.Dispatch<React.SetStateAction<string | null>>;
};

// 初期値の設定
export const UserContext = createContext<UserContextType>({
  userName: null,
  setUserName: () => {},
});

// カスタムフックの作成
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserName must be used within a UserProvider");
  }
  return context;
};
