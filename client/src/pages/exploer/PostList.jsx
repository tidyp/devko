import Post from "./Post";
import NewPost from "./NewPost";

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <div className="flex w-full flex-col justify-center ">
      <div className="flex flex-col items-center justify-center">
        {/* <p className="text-3xl font-semibold">EXPLOER</p>
        <p className="text-2xl font-semibold">EXPLOER:</p> */}
      </div>

      {/* <div className={styles.newpost}> */}
      <div className="flex flex-col items-center justify-center">
        {/* <NewPost /> */}
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        {posts.length === 0 && <p className="text-xl">작성된 글이 없습니다.</p>}
        {posts.map((post) => (
          <Post post={post} key={post.Id} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
