import styles from "./Login.module.scss";
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "../../config";

import { ReactComponent as GoogleBtn } from "../../assets/web_neutral_rd_ctn.svg";

console.log(GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI)

const LoginPage = () => {
<<<<<<< HEAD
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
      method: "GET",
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

=======
  
>>>>>>> 974775b4053cf8f8bf4c8d85536cfb040e2a1359
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.title}>Create your account</p>
        <p className={styles.sub}>Let's get started</p>
      </div>
      <a href="http://localhost:3000/api/googleAuth/signup">dwqdhqdkq</a>
      <button
        className={styles.btn}
        onClick={() => {
          // const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
          // url.searchParams.set("client_id", GOOGLE_CLIENT_ID);
          // url.searchParams.set("redirect_uri", GOOGLE_REDIRECT_URI);
          // url.searchParams.set("response_type", "code");
          // url.searchParams.set("scope", "email profile openid");
          // console.log(url)
          // window.location = url.href;
          window.location = 'http://localhost:3000/api/googleAuth/signup'
        }}
      >
        <GoogleBtn />
      </button>
    </div>
  );
};

export default LoginPage;
