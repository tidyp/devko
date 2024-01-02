import styles from "./Login.module.scss";
import { ReactComponent as GoogleBtn } from "../../assets/web_neutral_rd_ctn.svg";

import { useGoogleLogin } from "@react-oauth/google";

import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "../../config";
import { useEffect, useState } from "react";
console.log(GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI);

const LoginPage = () => {
  const [authcode, setAuthcode] = useState("");
  console.log(authcode);

  const handleLogin = useGoogleLogin({
    // onSuccess: (codeResponse) => console.log(codeResponse),
    onSuccess: (codeResponse) => setAuthcode(codeResponse),
    flow: "auth-code",
  });

  useEffect(() => {
    // if (authcode) {
    fetch("http://localhost:3000/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        authcode: authcode
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
    // }
  }, [authcode]);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.title}>Create your account</p>
        <p className={styles.sub}>Let's get started</p>
      </div>
      <button className={styles.btn} onClick={handleLogin}>
        <GoogleBtn />
      </button>
    </div>
  );
};

export default LoginPage;
