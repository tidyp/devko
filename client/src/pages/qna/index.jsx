// import postsData from "../../data/posts.json";

import { readPosts } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";

import FilterBox from "../../components/FilterBox";
import PopTags from "../../components/PopTags";
import TopWriters from "../../components/TopWriters";

const index = () => {
  const posts = useLoaderData();
  console.log(posts.currPageRows);

  return (
    <>
      <div className="box-border flex justify-center">
        <div className="box-border flex w-[80rem] gap-4">
          <div className="flex flex-col gap-2">
            <FilterBox />
            <PopTags />
            <TopWriters />
          </div>
          <div className="flex w-full flex-col items-start">
            {posts.currPageRows.map((el) => {
              return (
                <>
                  <div>{el.title}</div>;<div>{el.content}</div>;
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

export async function loader() {
  try {
    const board = await readPosts();
    return board;
  } catch (error) {
    // console.error("Error fetching posts:", error);

    // loader-fetch-요청실패
    return "연결실패";
  }
}
