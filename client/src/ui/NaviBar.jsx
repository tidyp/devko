import { Link, NavLink, useNavigate } from "react-router-dom";

import cookie from "react-cookies";

import { GoTriangleDown } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { VscBell, VscBellDot } from "react-icons/vsc";

import { useState } from "react";

const NaviBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const useruuid = cookie.load("uuid");
  const userName = cookie.load("userName");
  const userImage = cookie.load("userImage");

  const clickLogout = () => {
    cookie.remove("uuid", { path: "/" });
    cookie.remove("userName", { path: "/" });
    cookie.remove("userImage", { path: "/" });
    toggleDropdown();
    navigate("/");
  };

  //
  const activeLink = "text-black font-bold";
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
      <nav className=" flex z-50 items-center justify-center border-b border-b-[#d3d3d3] bg-white py-4">
        <div className="flex w-[80rem] items-center justify-between px-8">
          {/* <div className="flex w-full items-center justify-between px-8"> */}
          <div className="text-base">
            <Link to="/">
              <span className="font-semibold px-4">DEVKO</span>
              {/* <img className="w-6" src="/images/logo2.png" alt="logo" /> */}
            </Link>
          </div>
          <div className="flex gap-12 text-base uppercase">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              explore
            </NavLink>
            <NavLink
              to="/discuss/1"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              discuss
            </NavLink>
            <NavLink
              to="/qna/1"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Q&amp;A
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              news
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
            <VscBell className="text-xl"/>
            <VscBellDot className="text-xl text-blue-70 animate-bounce"/>
            {useruuid && (
              <div className="flex flex-row items-center gap-2 text-3xl">
                {/* <Link to={`/userinfo`}> */}
                <Link to={`/userinfo/${useruuid}`}>
                  <img
                    className="w-8 rounded-full"
                    src={`${userImage}`}
                    alt=""
                  />
                </Link>
                <div onClick={toggleDropdown} className="cursor-pointer">
                  <GoTriangleDown />
                </div>
              </div>
            )}

            {!useruuid && <Link className="text-sm" to="login">로그인/회원가입</Link>}
            {isDropdownOpen && (
              <div className=" w-30 item translate3d absolute right-0 top-10 flex flex-col rounded border bg-white p-2 px-4 shadow-md">
                {userName && (
                  <>
                    <span className=" cursor-pointer" onClick={clickLogout}>
                      로그아웃
                    </span>
                    <Link className="" to={`/myinfo`}>
                      내 정보
                    </Link>
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
