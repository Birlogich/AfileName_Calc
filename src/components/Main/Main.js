import { MainHeader } from "./Header/MainHeader";
import { Content } from "./Content/Content";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <div className={styles.main}>
      <MainHeader />
      <Content />
    </div>
  );
};
