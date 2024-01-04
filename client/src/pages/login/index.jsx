import axios from "axios";
import styles from "./Login.module.scss";
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "../../config";

import { ReactComponent as GoogleBtn } from "../../assets/web_neutral_rd_ctn.svg";
import { useGoogleLogin } from "@react-oauth/google";
console.log(GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI);

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.title}>Create your account</p>
        <p className={styles.sub}>Let's get started</p>
        <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=274353463964-kdkm3np5jbg5ts4l7vdksqj92m4or87q.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/googleAuth/signup/redirect&response_type=code&scope=email profile">
          4g94jg94
        </a>
      </div>
      {/* <a href="http://localhost:3000/api/googleAuth/signup">dwqdhqdkq</a> */}
      <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=274353463964-kdkm3np5jbg5ts4l7vdksqj92m4or87q.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/googleAuth/signup/redirect&response_type=code&scope=email profile">
        <button className={styles.btn}>
          <GoogleBtn />
        </button>
      </a>
    </div>
  );
};

export default LoginPage;
