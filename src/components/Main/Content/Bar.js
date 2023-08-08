import styles from "./Bar.module.css";

export const Bar = ({ height, backgroundColor, sum, width, maxHeight }) => {
  return (
    <div className={styles.bar_wrapper}>
      <p className={styles.bar_sum}>${sum}.00</p>
      <div
        style={{
          width: width,
          backgroundColor: backgroundColor,
          height: height,
          maxHeight: maxHeight,
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
};
