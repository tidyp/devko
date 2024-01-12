import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

// import Header from "./Header";
import NaviBar from "./NaviBar";
import Banner from "../ui/Banner";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <NaviBar />
      <Banner />
      <Outlet />
    </div>
  );
};

export default Layout;
