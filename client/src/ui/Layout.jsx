import { Outlet } from "react-router-dom";
import styles from './Layout.module.scss'

import GlobalNaviBar from "./GlobalNaviBar";
import Header from "./Header";
import Footer from "./Footer";


const Layout = () => {
  return (
    <div className={styles.layout}>
      <GlobalNaviBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
