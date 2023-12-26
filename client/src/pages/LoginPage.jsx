import { useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import styles from "./LoginPage.module.scss";

import axios from 'axios'
const LoginPage = () => {
  
  const [user, setUser] = useState("");

  // 2. 클라이언트 =>  인증서버: 접근 권한 요청
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      // 3. 인증서버 => 클라이언트: Access Token 전달
      setUser(codeResponse);
      console.log('codeResponse', codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  // 4. 클라이언트 => 인증서버: 보호된 자원 획득 요청
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        // 5. 인증서버 => 클라이언트: 요청 자원 전달
        .then((res) => {
          // 6. 클라이언트 => 유저: 완료
          console.log(res.data)
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <h1>Google Login Test</h1>
      {/* 1. 유저 => 클라이언트: 사용요청 */}
      <button onClick={login}>google login</button>
    </div>
  );
};

export default LoginPage;
