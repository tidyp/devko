import Banner from "../components/Banner";
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <Banner />
    </div>
  );
};

export default Header;
