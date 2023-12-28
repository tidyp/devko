import React from "react";
import styles from "./SideBox.module.scss";

const SideBox = ({ children }) => {
  return (
    <div className={styles.contaienr}>
      <div className={styles.inner}>
        <div className={styles.title}>{children}</div>
        <div className={styles.content}>
          <div className={styles.main}>
            <p>nf23fj39fj23-0fk23</p>
          </div>
          <div className={styles.sub}>
            <p>nf23fj39fj23-0fk23</p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.main}>
            <p>nf23fj39fj23-0fk23</p>
          </div>
          <div className={styles.sub}>
            <p>nf23fj39fj23-0fk23</p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.main}>
            <p>nf23fj39fj23-0fk23</p>
          </div>
          <div className={styles.sub}>
            <p>nf23fj39fj23-0fk23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBox;
