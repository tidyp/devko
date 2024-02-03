import { Link, NavLink, useNavigate } from "react-router-dom";

import cookie from "react-cookies";

import { GoTriangleDown } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { VscBell, VscBellDot } from "react-icons/vsc";

import { useState } from "react";

const dummy = [
  {
    isRead: true,
    profileImage:
      "https://th.bing.com/th/id/OIG3.dtxuqRx_wh5efePBGiVs?w=1024&h=1024&rs=1&pid=ImgDetMain",
    title: "공지사항",
    content: "가입을 환영합니다.",
  },
  {
    isRead: false,
    profileImage:
      "https://th.bing.com/th/id/OIG3.dtxuqRx_wh5efePBGiVs?w=1024&h=1024&rs=1&pid=ImgDetMain",
    title: "안내사항",
    content: "새로운 소식이 있어요.",
  },
];
const unreadCount = dummy.filter((item) => !item.isRead).length;

const NaviBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNotification = () => {
    setNotificationOpen((prev) => !prev);
  };
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const useruuid = cookie.load("uuid");
  const userName = cookie.load("userName");
  const userImage = cookie.load("userImage");

  const clickLogout = () => {
    cookie.remove("googleImage", { path: "/" });
    cookie.remove("googleId", { path: "/" });
    cookie.remove("naverImage", { path: "/" });
    cookie.remove("naverId", { path: "/" });
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
      {/* <nav className="z-50 flex items-center justify-center border-b border-b-[#d3d3d3] bg-white py-4"> */}

      {/* </nav> */}
      <nav className="z-50 flex items-center justify-center border-b border-b-[#d3d3d3] bg-white py-4 sm:invisible">
        <div className="flex w-[80rem] items-center justify-between px-8">
          {/* <div className="flex w-full items-center justify-between px-8"> */}
          <div className="text-base">
            <Link to="/">
              <span className="px-4 text-lg font-semibold">DEVKO</span>
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
              to="/questions/1"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Q&amp;A
            </NavLink>
            <NavLink
              to="/article"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              article
            </NavLink>
            <NavLink
              to="event"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              event
            </NavLink>
            <NavLink
              to="teams/1"
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
            <div className="cursor-pointer" onClick={toggleNotification}>
              {unreadCount > 0 && (
                <VscBellDot className="text-blue-70 animate-bounce text-xl" />
              )}
              {unreadCount < 0 && <VscBell className="text-xl" />}
            </div>
            {/* {!isNotificationOpen && (
            )} */}
            {isNotificationOpen && (
              <div className=" w-30 item translate3d absolute right-4 top-14 flex flex-col rounded border bg-white p-2 shadow-md">
                <p className="font-bold mb-4">알림</p>
                {dummy.map((item) => (
                  <div className="flex border-b-2 gap-2">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={item.profileImage}
                      alt=""
                    />
                    <div className="flex w-fit flex-col border-b-2">
                      <span>{item.title}</span>
                      <span>{item.content}</span>
                    </div>
                  </div>
                ))}
                {/* {userName && (
                  <>
                    <div>뭐</div>
                    <div>뭐</div>
                  </>
                )} */}
              </div>
            )}

            {useruuid && (
              <div className="flex flex-row items-center gap-2 text-3xl">
                {/* <Link to={`/userinfo`}> */}
                <Link to={`/userinfo/${useruuid}`}>
                  <img
                    className="w-8 rounded-full"
                    src={userImage || `${userImage}`}
                    alt=""
                  />
                </Link>
                <div onClick={toggleDropdown} className="cursor-pointer">
                  <GoTriangleDown />
                </div>
              </div>
            )}

            {!useruuid && (
              <Link className="text-sm" to="login">
                로그인/회원가입
              </Link>
            )}
            {isDropdownOpen && (
              <div className=" w-30 item translate3d absolute right-0 top-14 flex flex-col rounded border bg-white p-2 px-4 shadow-md">
                {userName && (
                  <>
                    <span className=" cursor-pointer" onClick={clickLogout}>
                      로그아웃
                    </span>
                    <Link className="" to={`/myinfo/${useruuid}`}>
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
