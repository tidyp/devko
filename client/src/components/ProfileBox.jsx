import { useLocation } from "react-router-dom";

const dummydata = [
  {
    userName: "dwqs",
    profileImage: "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=1",
    workPosition: "dwqs",
    interestArea: "dwqs",
    selfDescription: "dwqs",
    grade: "dwqs",
    postID: "dwqs",
    category: "dwqs",
    title: "dwqs",
    postContent: "dwqs",
    commentID: "dwqs",
    commentContent: "dwqs",
  },
];

const ProfileBox = () => {
  console.log(useLocation());
  const data = dummydata[0];

  return (
    <>
      <div className="box-border flex h-auto w-64 flex-col items-center justify-center gap-3.5 rounded-2xl bg-slate-50 p-8">
        <div className="text-base font-semibold text-black">
          {data.userName}
        </div>
        <div className="flex h-auto flex-col gap-5 self-stretch px-2.5">
          <header className="flex flex-row items-center justify-center gap-6">
            <div className="w-24">
              <img
                className="w-32 rounded-full"
                src={data.profileImage}
                alt=""
              />
            </div>
            <div className="w-24">
              <p>{data.nickName}</p>
              <p>
                <span>Position</span>
                {data.workPosition}
              </p>
              <p>{data.googleEmail}</p>
              <p>{data.naverEmail}</p>
            </div>
          </header>
          <section className="flex items-center justify-center gap-8">
            <button className="rounded-md bg-indigo-200 px-1 text-indigo-700">
              커피챗
            </button>
            <button className="rounded-lg bg-indigo-200 px-1 text-indigo-700">
              팔로우
            </button>
          </section>
          <section>
            <p>소개</p>
            <p>dqwdqwdqwd</p>
            <p>dqwdqwdqwd</p>
            <p>dqwdqwdqwd</p>
          </section>
          <footer>
            <p>커뮤니티 활동</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-slate-50 p-4">
                <p>dwdwd</p>
                <p>0/100</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p>dwdwd</p>
                <p>0/100</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p>dwdwd</p>
                <p>0/100</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p>dwdwd</p>
                <p>0/100</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
