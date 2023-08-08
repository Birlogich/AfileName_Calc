import styles from "./AverageBtn.module.css";

export const AverageBtn = ({ title, onClick, backgroundColor, color }) => {
  return (
    <button
      className={styles.btn}
      style={{ backgroundColor: backgroundColor, color: color }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
