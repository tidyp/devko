// import postsData from "../../data/posts.json";

import { readPosts } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";

import FilterBox from "../../components/FilterBox";
import PopTags from "../../components/PopTags";
import TopWriters from "../../components/TopWriters";

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
  ];

  return (
    <>
      <div className="box-border flex justify-center">
        <div className="box-border flex w-[80rem] gap-4">
          <div className="flex flex-col gap-2">
            <FilterBox />
            <PopTags />
            <TopWriters />
          </div>
          <div className="box-border flex flex-wrap items-start">
            {gl.map((el, index) => (
              <div key={index} className="my-2 w-1/3">
                <div className="h-60 w-80 overflow-hidden rounded-xl bg-white p-4 text-3xl">
                  {el}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
