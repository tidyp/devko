import styles from "./login.module.scss";
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "../../config";

import { ReactComponent as GoogleBtn } from "../../assets/web_neutral_rd_ctn.svg";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.title}>Create your account</p>
        <p className={styles.sub}>Let's get started</p>
      </div>
      <button
        className={styles.btn}
        onClick={() => {
          const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
          url.searchParams.set("client_id", GOOGLE_CLIENT_ID);
          url.searchParams.set("redirect_uri", GOOGLE_REDIRECT_URI);
          url.searchParams.set("response_type", "code");
          url.searchParams.set("scope", "email profile openid");
          window.location = url.href;
        }}
      >
        <GoogleBtn />
      </button>
    </div>
  );
};

export default LoginPage;
