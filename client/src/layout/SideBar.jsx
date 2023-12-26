import React from "react";
import styles from "./SideBar.module.scss";

import SideBox from "../components/SideBox";

const SideBar = () => {
  return (
    <>
      <aside className={styles.lside}>
        <SideBox className={styles.a}>
          <p>태그 컴포넌트</p>
        </SideBox>
        <SideBox>
          <p>인기유저 컴포넌트</p>
        </SideBox>
        <SideBox>
          <p>이벤트 컴포넌트</p>
        </SideBox>
        <SideBox>
          <p>12ㄷ12312 컴포넌트</p>
        </SideBox>
      </aside>
    </>
  );
};

export default SideBar;
