const ProfileBox = ({ user }) => {
  return (
    <div className="flex w-64 flex-col gap-3 rounded-3xl bg-white p-4">
      <header className="flex flex-row items-center justify-center gap-3">
        <div>
          <img className="w-48 rounded-full" src={user.profileImage} alt="" />
        </div>
        <div>
          <p>{user.userName}</p>
          <p>{user.workPosition}</p>
          <p>{user.googleEmail}</p>
          <p>{user.naverEmail}</p>
        </div>
      </header>
      <section className="flex items-center justify-center gap-8">
        <button className="rounded-md bg-indigo-200 px-8 text-indigo-700">
          커피챗
        </button>
        <button className="rounded-lg bg-indigo-200 px-8 text-indigo-700">
          팔로우
        </button>
      </section>
      <section>
        <p>소개</p>
        <p>뭐</p>
      </section>
      <footer>
        <p>커뮤니티 활동</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-slate-200 p-4">
            <p>dwdwd</p>
            <p>0/100</p>
          </div>
          <div className="rounded-lg bg-slate-200 p-4">
            <p>dwdwd</p>
            <p>0/100</p>
          </div>
          <div className="rounded-lg bg-slate-200 p-4">
            <p>dwdwd</p>
            <p>0/100</p>
          </div>
          <div className="rounded-lg bg-slate-200 p-4">
            <p>dwdwd</p>
            <p>0/100</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfileBox;
