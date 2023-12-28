import styles from "./Display.module.scss";

import SideBar from "./SideBar";
import Main from "./Main";

const Display = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.inner}>
          <SideBar />
          <Main />
        </div>
      </section>
    </>
  );
};

export default Display;
