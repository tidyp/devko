import styles from "./Exploer.module.scss";

import postsData from "../../data/posts.json";

import SideBar from "./SideBar";
import PostList from "./PostList";

const index = () => {
  const { posts } = postsData;

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
