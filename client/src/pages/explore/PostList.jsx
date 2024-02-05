import Post from "./Post";

const PostList = ({ posts }) => {
  const reversedPosts = posts.sort((a, b) => a.postId - b.postId);
  

  return (
    <div className="flex w-full flex-col justify-center">
      {reversedPosts.map((post) => (
        <Post post={post} key={post.postId} />
      ))}
    </div>
  );
};

export default PostList;
