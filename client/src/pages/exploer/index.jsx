import styles from "./Exploer.module.scss";

// import postsData from "../../data/posts.json";

import SideBar from "./SideBar";
import PostList from "./PostList";
import { readPosts } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";

const index = () => {
  const posts = useLoaderData();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner}>
          <SideBar />
          <PostList posts={posts} />
        </div>
      </div>
    </>
  );
};

export default index;

export async function loader() {
  const board = await readPosts();
  return board;
}
