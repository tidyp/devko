import { useEffect, useState } from "react";
import { getTopWriters } from "../api/apiSupabase";

//

const TopWriters = () => {
  const [writers, setWriters] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getTopWriters();
      setWriters(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const writersSplice = writers.sort().slice(0, 5);

  return (
    <div className="box-border flex h-auto w-64 flex-col items-center justify-center gap-3.5 rounded-2xl bg-slate-50 p-8">
      <div className="text-base font-semibold text-black">Top Writers</div>
      <div className="flex h-auto flex-col gap-5 self-stretch px-2.5">
        {writersSplice.map((el, index) => (
          <div key={index} className="flex flex-row items-center">
            <div>
              <img
                src={el.userImage}
                alt={el.userImage}
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <p className="font-bold">RANK: {el.userRank}</p>
              <p className="text-gray-600">{`Score: ${el.userScore.toLocaleString()}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopWriters;
