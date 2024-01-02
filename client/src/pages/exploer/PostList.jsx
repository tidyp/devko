import styles from "./PostList.module.scss";


import Post from "./Post";
import NewPost from "./NewPost";

const PostList = ({ posts }) => {
  return (
    <>
      <div className={styles.contianer}>
        <div className={styles.inner}>
          <p className={styles.title}>EXPLOER</p>
          <p className={styles.subtitle}>EXPLOER:</p>
        </div>
        <div className={styles.newpost}>
          <NewPost />
        </div>
        <div className={styles.board}>
          {posts.map((post) => (
            <Post post={post} key={post.Id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
