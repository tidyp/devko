import { Outlet } from "react-router-dom";

// import Header from "./Header";
import NaviBar from "./NaviBar";
import Banner from "../ui/Banner";

const Layout = () => {
  return (
    <div className="flex h-lvh  flex-col bg-white">
      <div className="sticky top-0">
        <NaviBar />
      </div>
      {/* <div className="flex-grow"> */}
      <Banner />
      <Outlet />
      {/* </div> */}
    </div>
  );
};

export default Layout;
