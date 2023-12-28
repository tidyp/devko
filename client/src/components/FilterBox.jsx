import React from "react";
import styles from "./filterBox.module.scss";

const FilterBox = () => {
  return (
    <div className={styles.contaienr}>
      <div className={styles.inner}>
        <div className={styles.title}></div>
        <div className={styles.content}>
          <div className={styles.main}>
            <p>필터</p>
          </div>
          <div className={styles.sub}>
            <p>nf23fj39fj23-0fk23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
