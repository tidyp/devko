const index = () => {
  const gl = [
    "스터디 그룹 모집",
    "스터디 그룹 모집",
    "스터디 그룹 모집",
    "스터디 그룹 모집",
    "스터디 그룹 모집",
    "스터디 그룹 모집",
    "스터디 그룹 모집",
    "스터디 그룹 모집",
    "스터디 그룹 모집",
    "스터디 그룹 모집",
    "스터디 그룹 모집",
    "스터디 그룹 모집",
    "스터디 그룹 모집",
  ];

  return (
    <>
      <div className="box-border flex flex-wrap items-start">
        {gl.map((el, index) => (
          <div key={index} className="my-2 w-1/3">
            <div className="h-60 w-80 overflow-hidden rounded-xl bg-slate-50 p-4 text-3xl">
              {el}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
