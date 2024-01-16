const index = () => {
  const gl = [
    {
      title: "스터디 그룹 모집",
      content: "aaaaaaaaa",
      curUser: 1,
      maxUSer: 3,
      cate: "프론트엔드",
      tools: "기타등",
    },
    {
      title: "스터디 그룹 모집",
      content: "bbbbbbbb",
      curUser: 10,
      maxUSer: 100,
      cate: "백엔드",
      tools: "기타등",
    },
    {
      title: "스터디 그룹 모집",
      content: "cccccccccc",
      curUser: 2,
      maxUSer: 4,
      cate: "디자이너",
      tools: "기타등",
    },
    {
      title: "스터디 그룹 모집",
      content: "aaaaaaaaa",
      curUser: 1,
      maxUSer: 3,
      cate: "프론트엔드",
      tools: "기타등",
    },
    {
      title: "스터디 그룹 모집",
      content: "bbbbbbbb",
      curUser: 10,
      maxUSer: 100,
      cate: "백엔드",
      tools: "기타등",
    },
    {
      title: "스터디 그룹 모집",
      content: "cccccccccc",
      curUser: 2,
      maxUSer: 4,
      cate: "디자이너",
      tools: "기타등",
    },
    {
      title: "스터디 그룹 모집",
      content: "aaaaaaaaa",
      curUser: 1,
      maxUSer: 3,
      cate: "프론트엔드",
      tools: "기타등",
    },
    {
      title: "스터디 그룹 모집",
      content: "bbbbbbbb",
      curUser: 10,
      maxUSer: 100,
      cate: "백엔드",
      tools: "기타등",
    },
    {
      title: "스터디 그룹 모집",
      content: "cccccccccc",
      curUser: 2,
      maxUSer: 4,
      cate: "디자이너",
      tools: "기타등",
    },
  ];

  return (
    <>
      <div className="box-border flex flex-wrap items-start">
        {gl.map((el, index) => (
          <div key={index} className="my-2 w-1/3">
            <div className="flex h-60 w-80 flex-col gap-8 overflow-hidden rounded-xl bg-slate-50 p-8 text-left text-xl ">
              <header>
                <div>
                  <span className="bg-rose-200 px-4 rounded-xl">{el.cate}</span>
                  <div>{el.title}</div>
                </div>
                <div>
                  <span>
                    {el.curUser}/{el.maxUSer}
                  </span>
                </div>
              </header>
              <bodt>{el.content}</bodt>
              <footer>{el.tools}</footer>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
