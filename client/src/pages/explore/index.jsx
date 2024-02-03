import { readPosts } from "../../api/apiDevko";
import { Outlet, useLoaderData } from "react-router-dom";
import MainBackGround from "../../components/MainBackGround";
import Sidebar from "../../components/Sidebar";
// import PopTags from "../../components/PopTags";
// import TopWriters from "../../components/TopWriters";
import PostList from "./PostList";
import AlertsBox from "../../components/AlertsBox";

const index = () => {
  const posts = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Outlet />
      <MainBackGround />
      {/* Sidebar */}
      <div className="flex w-[80rem] items-start justify-center gap-4">
        <div className="flex gap-2">
          <div className="flex flex-col gap-4">
            <Sidebar />
            {/* <PopTags />
            <TopWriters /> */}
            <div>TopWriters</div>
          </div>
        </div>
        {/* Posts */}
        <div className="flex w-full items-start justify-center">
          {!(posts === "연결실패") && posts.length > 0 && (
            <PostList posts={posts} />
          )}
          {posts.length <= 0 && posts && (
            <AlertsBox>작성된 글이 없습니다.</AlertsBox>
          )}
          {posts === "연결실패" && posts.length > 0 && (
            <AlertsBox>서버에 연결되어있지 않습니다.</AlertsBox>
          )}

          {/* // connect fail */}
        </div>
      </div>
    </div>
  );
};

export default index;

export async function loader() {
  try {
    const board = await readPosts();
    return board;
  } catch (error) {
    console.error("Error fetching posts:", error);
    // loader-fetch-요청실패
    return "연결실패";
  }
}
