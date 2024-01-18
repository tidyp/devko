import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProfileBox = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/profile/${id}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!userData) {
    return (
      <div className="flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  const data = userData[0];
  console.log(data);

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
              <p>intersting</p>
              <p> {data.interestArea}</p>
              <p>
                <p>Position </p>
                <p>{data.workPosition}</p>
              </p>
              <p>{data.googleEmail}</p>
              <p>{data.naverEmail}</p>
            </div>
          </header>
          <section className="flex items-center justify-center gap-8">
            <button className="rounded-md bg-indigo-200 px-1 text-indigo-700">
              1:1챗
            </button>
            <button className="rounded-lg bg-indigo-200 px-1 text-indigo-700">
              팔로우
            </button>
          </section>
          <section>
            <p>소개</p>
            <p>{data.selfDescription}</p>
          </section>
          <footer>
            <p>커뮤니티 활동</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-slate-50 p-4">
                <p>작성글</p>
                <p>점수/갯수</p>
                <p>0/100</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p>점수/갯수</p>
                <p>0/100</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p>점수/갯수</p>
                <p>0/100</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p>점수/갯수</p>
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
