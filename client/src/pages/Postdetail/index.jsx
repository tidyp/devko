import styles from "./Postdetail.module.scss";

import { readPost } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";

const Postdetail = () => {
  const [post] = useLoaderData();

  return (
    <div className="flex items-start justify-center">
      <div className="rounded-md bg-gray-200 p-4">
        <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
        <p>유저아이디</p>
        <p className="text-gray-700">{post.userId}</p>
        <p>카테고리</p>
        <p className="text-gray-700">{post.category}</p>
        <p>제목</p>
        <p className="text-gray-700">{post.title}</p>
        <p>본문</p>
        <p className="text-gray-700">{post.content}</p>
        <p className="text-gray-700">{post.createdAt}</p>
        <p className="text-gray-700">{post.updatedAt}</p>
      </div>
    </div>
  );
};

export default Postdetail;

export async function loader({ params }) {
  try {
    const post = await readPost(params.id);
    return post;
  } catch (error) {
    // console.error("Error fetching posts:", error);

    // loader-fetch-요청실패
    return "연결실패";
  }
}
