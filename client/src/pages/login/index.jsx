import { ReactComponent as Naver } from "../../assets/naver.svg";
import { ReactComponent as Google } from "../../assets/google.svg";

const LoginPage = () => {
  return (
    <div className="m-auto flex h-screen flex-col items-center justify-center gap-8 text-center">
      <img className="h-64" src="/images/logo2.png" alt="logo" />
      <div className="text-xl" >Lets get started</div>
      <div>
        <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=274353463964-kdkm3np5jbg5ts4l7vdksqj92m4or87q.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/googleAuth/callback&response_type=code&scope=email profile">
          <div className="shadow-3xl flex h-12 w-64 items-center justify-center gap-2 rounded-lg bg-[#f2f2f2] px-8">
            <Google />
            <spans className="text-black">구글로 계속하기</spans>
          </div>
        </a>
      </div>
      <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=vlUKteyrG18vRROD6kqr&redirect_uri=http://localhost:3000/api/naverAuth/callback&state=RANDOM_STATE">
        <div className="shadow-3xl  flex h-12 w-64 items-center justify-center gap-2 rounded-lg bg-[#36c566] px-8">
          <Naver className="h-4 fill-white" />
          <spans className="text-white">네이버로 계속하기</spans>
        </div>
      </a>
    </div>
  );
};

export default LoginPage;
