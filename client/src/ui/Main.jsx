import styles from "./Main.module.scss";
import SideBar from "./SideBar";

const Main = () => {
  return (
    <>
      <SideBar />
      <main className={styles.contianer}>
        <div className={styles.inner}>
          <p className={styles.title}>EXPLOER</p>
          <p className={styles.subtitle}></p>
        </div>
      </main>
    </>
  );
};

export default Main;
