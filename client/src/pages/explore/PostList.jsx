import Post from "./Post";

const PostList = ({ posts }) => {
  const reversedPosts = posts.slice();
  console.log(reversedPosts)

  return (
    <div className="flex w-full flex-col justify-center">
      {reversedPosts.map((post) => (
        <Post post={post} key={post.postId} />
      ))}
    </div>
  );
};

export default PostList;
