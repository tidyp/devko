import { Outlet, Link, NavLink } from "react-router-dom";
import styles from "./GlobalNaviBar.module.scss";

import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const NaviBar = () => {
  return (
    <>
      <nav className={styles.navigationBar}>
        <div className={styles.logo}>
          <Link to="/">DEVKO</Link>
        </div>
        <div className={styles.tabs}>
          <div className={styles.tab}>
            <NavLink to="exploer">EXPLOER</NavLink>
          </div>
          <div className={styles.tab}>
            <NavLink to="discuss">DISCUSS</NavLink>
          </div>
          <div className={styles.tab}>
            <NavLink to="qna">QnA</NavLink>
          </div>
          <div className={styles.tab}>
            <NavLink to="evnet">EVENT</NavLink>
          </div>
        </div>
        <div className={styles.tools}>
          <div className={styles.searchBar}>
            <FaSearch />
          </div>
          <div className={styles.searchIcon}>
            <div>검색</div>
          </div>
          <div className={styles.searchBar}>
            <FaBell />
          </div>
          <div className={styles.profilePicture}>
            <Link to="login">로그인</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NaviBar;
