import { Outlet, Link, NavLink } from "react-router-dom";
import styles from "./GlobalNaviBar.module.scss";

import { FaSearch } from "react-icons/fa";

const NaviBar = () => {
  return (
    <>
      <nav className={styles.navigationBar}>
        <div className={styles.logo}>
          <Link to="/">DEVKO</Link>
        </div>
        <div className={styles.tabs}>
          <div className={styles.tab}>EXPLOER</div>
          <div className={styles.tab}>DISCUSS</div>
          <div className={styles.tab}>QnA</div>
          <div className={styles.tab}>EVENT</div>
        </div>
        <div className={styles.tools}>
          <div className={styles.searchBar}>
            <FaSearch />
          </div>
          <div className={styles.searchIcon}>
            <div>검색</div>
          </div>
          <div className={styles.profilePicture}>
            <NavLink to="login">로그인</NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NaviBar;
