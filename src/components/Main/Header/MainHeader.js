import { BackBtn } from "../../../UI/BackBtn";
import { User } from "../../../UI/User";
import styles from "./MainHeader.module.css";

export const MainHeader = () => {
  return (
    <div className={styles.header}>
      <BackBtn children="Go Back" />
      <User nickName={"@kevan"} subscription={"Premium"} />
    </div>
  );
};
