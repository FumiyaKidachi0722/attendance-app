import React from "react";
import styles from "@styles/atoms/loading.module.css";

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingText}>読み込み中...</div>
    </div>
  );
};

export default Loading;
