import { Outlet } from "react-router-dom";

// import Header from "./Header";
import NaviBar from "./NaviBar";

const Layout = () => {
  return (
    <div className="sticky top-0 flex h-lvh flex-col bg-white">
      <NaviBar />
      <Outlet />
    </div>
  );
};

export default Layout;
