import styles from "./Exploer.module.scss";

import postsData from "../../data/posts.json";

import SideBar from "./SideBar";
import PostList from "./PostList";

const index = () => {
  
  const {posts} = postsData

  return (
    <>
      <section className="flex justify-center">
        <div className={styles.inner}>
          <SideBar />
          <PostList posts={posts} />
        </div>
      </section>
    </>
  );
};

export default index;
