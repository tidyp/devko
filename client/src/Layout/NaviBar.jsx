import styles from "./NaviBar.module.scss";

import { Outlet, Link } from "react-router-dom";

const NaviBar = () => {
  return (
    <>
      <nav className={styles.navigationBar}>
        <div className={styles.logo}><a href="/">로고</a></div>
        <div className={styles.tabs}>
          <div className={styles.tab}>tab1</div>
          <div className={styles.tab}>tab2</div>
          <div className={styles.tab}>tab3</div>
          <div className={styles.tab}>tab4</div>
        </div>
        <div className={styles.searchIcon}>검색아이콘</div>
        <div className={styles.searchBar}>검색바</div>
        <div className={styles.profilePicture}><Link to='login'>로그인</Link></div>
      </nav>
      <Outlet />
    </>
  );
};

export default NaviBar;
