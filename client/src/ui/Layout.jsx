import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

// import Header from "./Header";
import GNB from "./GNB";
import Banner from "../ui/Banner";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <GNB />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
