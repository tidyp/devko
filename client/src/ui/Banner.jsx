import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className='flex justify-center p-4'>
      <div className={styles.ccc}>
        <div className={styles.inner}></div>
      </div>
    </div>
  );
};

export default Banner;
