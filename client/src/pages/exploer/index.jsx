import styles from "./Exploer.module.scss";

import postsData from "../../data/posts.json";

import SideBar from "./SideBar";
import PostList from "./PostList";

const index = () => {
  
  const {posts} = postsData

  return (
    <>
      <section className={styles.container}>
        <div className={styles.inner}>
          <SideBar />
          <PostList posts={posts} />
        </div>
      </section>
    </>
  );
};

export default index;
