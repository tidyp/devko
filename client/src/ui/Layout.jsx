import { Outlet } from "react-router-dom";

// import Header from "./Header";
import NaviBar from "./NaviBar";

const Layout = () => {
  return (
    <div className="flex py-auto h-fit flex-col bg-white">
      <NaviBar />
      <Outlet />
    </div>
  );
};

export default Layout;
