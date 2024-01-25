import Post from "./Post";

const PostList = ({ posts }) => {
  const reversedPosts = posts.slice()
  console.log(reversedPosts)


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
        {reversedPosts.length === 0 && (
          <p className="text-xl">작성된 글이 없습니다.</p>
        )}
        {reversedPosts.map((post) => (
          <Post post={post} key={post.postId} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
