import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProfileBox = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [userPoint, setUserPoint] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await fetch(`http://localhost:3000/api/profile/${id}`);
        const res2 = await fetch(
          `http://localhost:3000/api/profile/${id}/point`,
        );
        const data1 = await res1.json();
        const data2 = await res2.json();
        setUserData(data1.userrows);
        setUserPoint(data2);
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

  return (
    <>
      <div className="box-border flex h-auto w-64 flex-col items-center justify-center gap-2 rounded-2xl bg-slate-50 p-4">
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
              <p className="font-semibold">intersting</p>
              <p> {data.interestArea}</p>
              <p>
                <p className="font-semibold">Position </p>
                <p>{data.workPosition}</p>
              </p>
              <p>{data.googleEmail}</p>
              <p>{data.naverEmail}</p>
            </div>
          </header>
          <section className="flex items-center justify-center gap-2">
            <button className="w-full rounded-md bg-indigo-200 px-1 text-indigo-700">
              1:1챗
            </button>
            <button className="w-full rounded-lg bg-indigo-200 px-1 text-indigo-700">
              팔로우
            </button>
          </section>
          <section>
            <p className="font-semibold">소개</p>
            <p>{data.selfDescription}</p>
          </section>
          <footer>
            <p className="font-semibold">커뮤니티 활동</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-slate-50 py-4">
                <p>postPoint</p>
                <p className="text-3xl font-semibold">{userPoint.postPoint}</p>
              </div>
              <div className="rounded-lg bg-slate-50 py-4">
                <p>commentPoint</p>
                <p className="text-3xl font-semibold">
                  {userPoint.commentPoint}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 py-4">
                <p>teamPoint</p>
                <p className="text-3xl font-semibold">{userPoint.teamPoint}</p>
              </div>
              <div className="rounded-lg bg-slate-50 py-4">
                <p>totalPoint</p>
                <p className="text-3xl font-semibold">{userPoint.totalPoint}</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
