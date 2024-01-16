import { Link, NavLink, useNavigate } from "react-router-dom";

import cookie from "react-cookies";

import { GoTriangleDown } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { useState } from "react";

const NaviBar = () => {
  const userImage = "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=1";
  const [searchQuery, setSearchQuery] = useState("");

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    console.log("click");
    setDropdownOpen((prev) => !prev);
  };

  const username = cookie.load("userId");
  console.log(username)

  const clickLogout = () => {
    cookie.remove("userId", { path: "/" });
    toggleDropdown();
    navigate("/");
  };

  //
  const activeLink = "text-indigo-600";
  // 검색
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <>
      <nav className="z-40 flex items-center justify-center bg-white py-4">
        <div className="flex w-[80rem] items-center justify-between px-8">
          <div className="text-base font-semibold">
            <Link to="/">DEVKO</Link>
          </div>
          <div className="flex gap-12 text-base font-semibold  uppercase ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              exploer
            </NavLink>
            <NavLink
              to="/discuss"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              discuss
            </NavLink>
            <NavLink
              to="/qna"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Q&amp;A
            </NavLink>
            <NavLink
              to="event"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              event
            </NavLink>
            <NavLink
              to="group"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              group
            </NavLink>
          </div>
          <div className="relative flex  items-center gap-4">
            <FaSearch />
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="검색어를 입력하세요."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>
            <FaBell />
            {username && (
              <div className="flex flex-row items-center gap-2 text-3xl">
                <Link to={`/userinfo`}>
                  <img className="w-8 rounded-full" src={userImage} alt="" />
                </Link>
                <div onClick={toggleDropdown} className="cursor-pointer">
                  <GoTriangleDown />
                </div>
              </div>
            )}

            {!username && <Link to="login">로그인</Link>}
            {isDropdownOpen && (
              <div className="z-[9999] w-30 item translate3d absolute right-0 top-10 flex flex-col rounded border bg-white p-2 px-4 shadow-md">
                {username && (
                  <>
                    <span className="cursor-pointer" onClick={clickLogout}>
                      로그아웃
                    </span>
                    <Link to="/myinfo">내 정보</Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NaviBar;
