import React from "react";
import styles from "./SideBox.module.scss";

const SideBox = ({ children }) => {
  return (
    <div className={styles.contaienr}>
      <div className={styles.inner}>
        <div className={styles.title}>{children}</div>
        <div className={styles.content}>
          <p>nf23fj39fj23-0fk23-0fk320f3k2-f230k</p>
          <p>nf23fj39fj23-0fk23-0fk320f3k2-f230k</p>
          <p>nf23fj39fj23-0fk23-0fk320f3k2-f230k</p>
          <p>nf23fj39fj23-0fk23-0fk320f3k2-f230k</p>
          <p>nf23fj39fj23-0fk23-0fk320f3k2-f230k</p>
          <p>nf23fj39fj23-0fk23-0fk320f3k2-f230k</p>
        </div>
      </div>
    </div>
  );
};

export default SideBox;
