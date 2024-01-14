// import postsData from "../../data/posts.json";

import { readPosts } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";

import PostList from "./PostList";
import ErrorServer from "./ErrorServer";

const index = () => {
  const posts = useLoaderData();

  return (
    <div className="flex w-full items-start justify-center">
      {posts === "연결실패" ? (
        // connect fail
        <ErrorServer />
      ) : (
        posts && <PostList posts={posts} />
      )}
    </div>
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
