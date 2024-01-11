const TopWriters = () => {
  return (
    <div className="box-border flex h-auto w-64 flex-col items-center justify-center    gap-3.5  rounded-2xl  bg-white p-8 ">
      <div className="text-base font-semibold text-black">TopWriters</div>
      <div className="flex h-auto flex-col  gap-5 self-stretch px-2.5">
        <div className="flex flex-row">
          <div>
            <p>사진</p>
          </div>
          <div>
            <p>텍스트1</p>
            <p>텍스트2</p>
          </div>
        </div>

        <div className="flex flex-row">
          <div>
            <p>사진</p>
          </div>
          <div>
            <p>텍스트1</p>
            <p>텍스트2</p>
          </div>
        </div>

        <div className="flex flex-row">
          <div>
            <p>사진</p>
          </div>
          <div>
            <p>텍스트1</p>
            <p>텍스트2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopWriters;
