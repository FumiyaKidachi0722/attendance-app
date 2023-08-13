// components/atoms/ErrorMessage.tsx
import styles from "@/styles/atoms/errorMessage.module.css";

export function ErrorMessage({ message }: { message: string }) {
  return <p className={styles["error-message"]}>Error: {message}</p>; // 修正箇所
}
