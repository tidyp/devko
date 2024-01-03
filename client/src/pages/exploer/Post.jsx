import styles from "./Post.module.scss";

import { formatDate } from "../../utils/utils";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const data = formatDate(post.WriteDate);

  return (
    <>
      <div className={styles.container}>
        {/* post header */}
        <header className={styles.header}>
          <div className={styles.profileImage}>
            <img src={post.profileImage} alt="" />
          </div>

          <div className={styles.top}>
            <p className={styles.title}>{post.Title}</p>
            <p className={styles.bottom}>
              <span className={styles.name}>{post.name}</span>
              <span className={styles.date}>{data}</span>
            </p>
          </div>
        </header>
        {/* post 본문 */}
        <main>{post.Content}</main>
        {/* post footer */}
        <footer>조회수 댓글갯수 좋아요 댓글 공유</footer>
      </div>
    </>
  );
};

export default Post;
