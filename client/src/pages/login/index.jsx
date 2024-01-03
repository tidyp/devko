import axios from "axios";
import styles from "./Login.module.scss";
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "../../config";

import { ReactComponent as GoogleBtn } from "../../assets/web_neutral_rd_ctn.svg";
import { useGoogleLogin } from "@react-oauth/google";
console.log(GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI);

const LoginPage = () => {
  // const [authcode, setAuthcode] = useState("");
  // console.log(authcode);

  // const handleLogin = () => {
  //   window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`;
  // };

  // const useGoogleLogin = () => {
  //   useEffect(() => {
  //     // if (authcode) {
  //     fetch("http://localhost:3000/test", {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         authcode: authcode,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.error("Error:", error));
  //     // }
  //   }, [authcode]);
  // };

  // const googleLoginOnSuccess = useGoogleLoginSuccessHandler();
  // let url = "https://accounts.google.com/o/oauth2/v2/auth";
  // url += `?client_id=274353463964-kdkm3np5jbg5ts4l7vdksqj92m4or87q.apps.googleusercontent.com`;
  // url += `&redirect_uri=${GOOGLE_SIGNUP_REDIRECT_URI}`;
  // url += "&response_type=code";
  // url += "&scope=email profile";
  // console.log(url);
  // fetch();
  
  const handleLogin = useGoogleLogin({
    scope: "email profile",
    client_id:
      "274353463964-kdkm3np5jbg5ts4l7vdksqj92m4or87q.apps.googleusercontent.com",
    redirect_uri: "http://localhost:3000/api/googleAuth/signup/redirect",
    response_type: "code",
    onSuccess: async ({ code }) => {
      console.log(code);

      const res = await fetch(
        `http://localhost:3000/api/googleAuth/signup/redirect?code=${code}`,
      );
      const data = await res.json();
      return data;
      // axios
      //   .get(`http://localhost:3000/signup/redirect?${code}`)
      //   // .get(`http://localhost:3000/signup/redirect?${}`, { code })
      //   .then(({ data }) => {
      //     console.log(data);
      //   });
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: "auth-code",
  });

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.title}>Create your account</p>
        <p className={styles.sub}>Let's get started</p>

        <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=274353463964-kdkm3np5jbg5ts4l7vdksqj92m4or87q.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/googleAuth/signup/redirect&response_type=code&scope=email profile">4g94jg94</a>;
      </div>
      {/* <a href="http://localhost:3000/api/googleAuth/signup">dwqdhqdkq</a> */}

      <button className={styles.btn} onClick={handleLogin}>
        <GoogleBtn />
      </button>
    </div>
  );
};

export default LoginPage;
