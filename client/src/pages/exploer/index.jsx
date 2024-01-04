import styles from "./Exploer.module.scss";

// import postsData from "../../data/posts.json";

import SideBar from "./SideBar";
import PostList from "./PostList";
import { readPosts, readUser } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";

const index = () => {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner}>
          <SideBar />
          {posts === "연결실패" ? (
            <div>서버와의 연결에 실패하였습니다.</div>
          ) : (
            posts && <PostList posts={posts} />
          )}
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
