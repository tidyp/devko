import { ReactComponent as Naver } from "../../assets/naver.svg";
import { ReactComponent as Google } from "../../assets/google.svg";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <div className="">
        <p className="">Create your account</p>
        <p className="">Lets get started</p>
      </div>
      <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=274353463964-kdkm3np5jbg5ts4l7vdksqj92m4or87q.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/googleAuth/callback&response_type=code&scope=email profile">
        <div className="h-8 w-36">
          <div className="shadow-3xl flex h-12 w-56 items-center justify-center gap-2 rounded-lg bg-[#f2f2f2] px-8">
            <Google />
            <spans className="text-black">구글 로그인</spans>
          </div>
        </div>
      </a>
      <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=vlUKteyrG18vRROD6kqr&redirect_uri=http://localhost:3000/api/naverAuth/callback&state=RANDOM_STATE">
        <div className="h-8 w-36">
          <div className="shadow-3xl  flex h-12 w-56 items-center justify-center gap-2 rounded-lg bg-[#36c566] px-8">
            <Naver className="h-4 fill-white" />
            <spans className="text-white">네이버 로그인</spans>
          </div>
        </div>
      </a>
    </div>
  );
};

export default LoginPage;
