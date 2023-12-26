import { Outlet } from "react-router-dom";
import GlobalNaviBar from "./GlobalNaviBar";
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <GlobalNaviBar />
      {Outlet}
      <Footer/>
    </>
  );
};

export default Layout;
