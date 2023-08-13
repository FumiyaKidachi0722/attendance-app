// validation.ts
export const validateUserName = (userName: string): string | null => {
  const usernamePattern = /^[a-zA-Z0-9]+$/;
  if (!userName) {
    return "ユーザー名は必須です。";
  } else if (!usernamePattern.test(userName)) {
    return "ユーザー名は英数字のみ許可されます。";
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  const passwordMinLength = 8;
  if (!password) {
    return "パスワードは必須です。";
  } else if (password.length < passwordMinLength) {
    return "パスワードは8文字以上である必要があります。";
  }
  return null;
};
