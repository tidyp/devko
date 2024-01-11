const dummyData = [
  // 데이터 시작일-종료일 utils로 처리
  {
    userImage: "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=123",
    rank: 1,
    score: 9999,
  },
  {
    userImage: "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=456",
    rank: 2,
    score: 8888,
  },
  {
    userImage: "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=789",
    rank: 3,
    score: 7777,
  },
];

const TopWriters = () => {
  return (
    <div className="box-border flex h-auto w-64 flex-col items-center justify-center gap-3.5 rounded-2xl bg-white p-8">
      <div className="text-base font-semibold text-black">Top Writers</div>
      <div className="flex h-auto flex-col gap-5 self-stretch px-2.5">
        {dummyData.map((el, index) => (
          <div key={index} className="flex flex-row items-center">
            <div>
              <img
                src={el.userImage}
                alt={el.userImage}
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <p className="font-bold">RANK: {el.rank}</p>
              <p className="text-gray-600">{`Score: ${el.score}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopWriters;
