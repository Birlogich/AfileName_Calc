import { useState } from "react";
import styles from "./User.module.css";

const arrow = (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.6666 1.66666L5.99998 6.33332L1.33331 1.66666"
      stroke="#2E3271"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const User = ({ nickName, subscription }) => {
  const [clickedUser, isClickedUser] = useState(true);

  const toggleClicked = () => {
    isClickedUser(!clickedUser);
  };

  return (
    <div className={styles.user_wrapper}>
      <p className={styles.user_nickName}>{nickName}</p>
      {clickedUser && (
        <p className={styles.user_subscription}>{subscription}</p>
      )}
      <button onClick={toggleClicked} className={styles.user_btn}>
        {arrow}
      </button>
    </div>
  );
};
