import { Outlet, Link, NavLink } from "react-router-dom";
import styles from "./GNB.module.scss";

import cookie from "react-cookies";

import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const NaviBar = () => {
  const isUserLoggedIn = cookie.load("isLogined") === "true";
  const username = cookie.load("googleId");
  //   cookie.load("googleEmail") === "true" ? cookie.load("googleEmail") : "";
  // console.log(`쿠키 ${isUserLoggedIn}`);
  // console.log(`쿠키 ${username}`);
  const userImage = "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=1";

  const clickLogout = () => {
    alert(
      "거부됨",
    );
  };

  return (
    <>
      <nav className="flex items-center justify-center bg-[#f5f5f5]">
        <div className="flex w-[80rem] items-center justify-between px-8 py-2">
          <div className={styles.logo}>
            <Link to="/">DEVKO</Link>
          </div>
          <div className={styles.tabs}>
            <div className={styles.tab}>
              <NavLink to="/">EXPLOER</NavLink>
            </div>
            <div className={styles.tab}>
              <NavLink to="discuss">DISCUSS</NavLink>
            </div>
            <div className={styles.tab}>
              <NavLink to="qna">QnA</NavLink>
            </div>
            <div className={styles.tab}>
              <NavLink to="event">EVENT</NavLink>
            </div>
            <div className={styles.tab}>
              <NavLink to="group">GROUP</NavLink>
            </div>
          </div>
          <div className={styles.tools}>
            <div className={styles.searchBar}>
              <FaSearch />
              <input type="text" placeholder="검색어를 입력하세요." />
            </div>
            <div className={styles.searchBar}>
              <FaBell />
            </div>
            {isUserLoggedIn && (
              <Link to={`/userinfo/${username}`}>
                <img className="w-8 rounded-full" src={userImage} alt="" />
              </Link>
            )}
            <div className={styles.profilePicture}>
              {isUserLoggedIn && (
                <Link to="/">
                  <span onClick={clickLogout}>로그아웃</span>
                </Link>
              )}
              {!isUserLoggedIn && <Link to="login">로그인</Link>}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NaviBar;
