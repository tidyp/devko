import { useEffect, useState } from "react";
// import { getPoptags } from "../api/apiSupabase";
import { getPoptags } from "../api/apiSidebar";
import PopTag from "./PopTag";
import LoadingSpinner from "./LoadingSpinner";

//

const PopTags = () => {
  const [tags, setTags] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getPoptags();
      setTags(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const tagssplice = tags.sort().slice(0, 3);

  return (
    <div className="box-border flex h-auto w-64 flex-col items-center justify-center    gap-3.5  rounded-2xl  bg-slate-50 p-8 ">
      <div className=" text-base font-semibold text-black">Popular Tags</div>
      <LoadingSpinner />
      <div className="flex h-auto flex-col items-start justify-start gap-5 self-stretch px-2.5">
        {tagssplice.map((el) => (
          <PopTag key={el.tagName} {...el} />
        ))}
      </div>
    </div>
  );
};

export default PopTags;
