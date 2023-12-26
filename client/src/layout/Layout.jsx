import { Outlet } from "react-router-dom";
import GlobalNaviBar from "./GlobalNaviBar";
import Banner from "../components/Banner";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <GlobalNaviBar />
      <div className={styles.banner}>
        <Banner />
      </div>

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
