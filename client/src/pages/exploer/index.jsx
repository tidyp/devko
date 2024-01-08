// import postsData from "../../data/posts.json";

import PostList from "./PostList";
import { readPosts } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";
import ErrorServer from "./ErrorServer";

import FilterBox from "../../components/FilterBox";
import PopTags from "../../components/PopTags";
import TopWriters from "../../components/TopWriters";

const index = () => {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <>
      <div className="box-border flex justify-center">
        <div className="box-border flex w-[80rem] gap-4">
          <div className="flex flex-col gap-2">
            <FilterBox />
            <PopTags />
            <TopWriters />
          </div>
          <div className="flex w-full items-start">
            {posts === "연결실패" ? (
              // connect fail
              <ErrorServer />
            ) : (
              posts && <PostList posts={posts} />
            )}
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
