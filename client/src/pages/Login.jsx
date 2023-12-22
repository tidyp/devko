import React from "react";
import styles from "./Login.module.scss";

const Login = () => {
  const handleGoogleLogin = async () => {
    console.log('click g login')
    try {
      const response = await fetch("/api/authGoogle/login", {
        method: "GET",
      });

      if (!response.ok) {
        console.error("Google login failed");
        return;
      }
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const handleNaverLogin = async () => {
    console.log('click n login')
    try {
      const response = await fetch("/api/authNaver/naverlogin", {
        method: "GET",
      });

      if (!response.ok) {
        console.error("Naver login failed");
        return;
      }
    } catch (error) {
      console.error("Error during Naver login:", error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Create your account</p>
          <p>Let's get started</p>
        </div>
        <button className={styles.googleBtn} onClick={handleGoogleLogin}>
          Login with Google
        </button>
        <button className={styles.naverBtn} onClick={handleNaverLogin}>
          Login with Naver
        </button>
        <p>
          Already have an account?<a href="#">login</a>
        </p>
        <div className={styles.test}>
          <br />
          <a href="/api/authGoogle/signup">구글 signup</a>
          <br />
          <a href="/api/authGoogle/login">구글 login</a>
          <br />
          <a href="/api/authNaver/naverlogin">네이버 login</a>
        </div>
      </div>
    </>
  );
};

export default Login;
