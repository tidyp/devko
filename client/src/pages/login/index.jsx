import styles from "./Login.module.scss";
import { ReactComponent as GoogleBtn } from "../../assets/web_neutral_rd_ctn.svg";


import naverImge from "../../assets/btnG_완성형.png";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.title}>Create your account</p>
        <p className={styles.sub}>Lets get started</p>
      </div>
      <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=274353463964-kdkm3np5jbg5ts4l7vdksqj92m4or87q.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/googleAuth/callback&response_type=code&scope=email profile">
        <button className={styles.btn}>
          <GoogleBtn />
        </button>
      </a>
      <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=vlUKteyrG18vRROD6kqr&redirect_uri=http://localhost:3000/api/naverAuth/callback&state=RANDOM_STATE">
        <button>
          <img className="h-10" src={naverImge} alt="" />
        </button>
      </a>
    </div>
  );
};

export default LoginPage;
