import { ReactComponent as Logo } from "../assets/images/logo.svg";
import styles from "./Siderbar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <div className={styles.infos}>
        <div className={styles.info}>
          <p>Legal</p>
          <p>Terms of Service - Privacy - DMCA -</p>
          <p>Creator Terms</p>
        </div>
        <div className={styles.info}>
          <p>
            <span>UI:</span> 4.2023.15
          </p>
          <p>
            <span>App:</span> 4.2023.15
          </p>
          <p>
            <span>Language:</span> English (US)
          </p>
        </div>
      </div>
    </div>
  );
};
