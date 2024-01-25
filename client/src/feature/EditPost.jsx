import { readPost } from "../api/apiDevko";
import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { updatePost } from "../api/apiDevko";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const categories = [
  { id: "discuss", label: "Discuss" },
  { id: "qna", label: "Q&A" },
  { id: "event", label: "Event" },
  { id: "group", label: "Group" },
];

const Post = () => {
  const navigate = useNavigate();
  const username = cookie.load("uuid");
  const {params} = useParams()

  // 데이터 load
  const [post] = useLoaderData().post;
  console.log(post)

  const [selectedCategory, setSelectedCategory] = useState("discuss");
  const [postData, setPostData] = useState(() => {
    return post
      ? { ...post, category: post.category || "discuss" }
      : { title: "", content: "", category: "discuss" };
  });

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setPostData((prevPost) => ({ ...prevPost, category: categoryId }));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPostData((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await updatePost({ ...postData, userId: username });
      const response = await updatePost({ ...postData});
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  const renderCategoryButton = (category) => (
    <button
      key={category.id}
      type="button"
      className={`rounded-md border px-4 py-2 ${
        selectedCategory === category.id
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-700"
      }`}
      onClick={() => handleCategoryChange(category.id)}
    >
      {category.label}
    </button>
  );

  return (
    <div className="flex w-full flex-col items-start">
      <form className="flex w-full flex-col gap-3 px-4" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between gap-2">
          {categories.map(renderCategoryButton)}
          <input
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            className="w-full rounded-lg border bg-gary-100 p-2"
            required
            value={postData.title}
            onChange={handleChange}
          />
        </div>
        {postData.category === "event" && (
          <div className="flex gap-2">
            <input
              type="date"
              name="startDate"
              placeholder="시작 날짜"
              className="w-full rounded-lg border bg-gary-100 p-2"
              required
              value={postData.startDate}
              onChange={handleChange}
            />
            <input
              type="date"
              name="endDate"
              placeholder="종료 날짜"
              className="w-full rounded-lg border bg-gary-100 p-2"
              required
              value={postData.endDate}
              onChange={handleChange}
            />
          </div>
        )}
        <div>
          <textarea
            name="content"
            className="h-96 w-full rounded-md border bg-gary-100 p-2"
            placeholder="내용을 입력하세요"
            required
            value={postData.content}
            onChange={handleChange}
          />
        </div>

        <div className="mt-6">
          <Button color="bg-blue-500" onClick={handleSubmit}>
            수정하기
          </Button>
          <Button color="bg-blue-500" onClick={handleCancel}>
            취소하기
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Post;
export async function loader({ params }) {
  try {
    const post = await readPost(params.id);
    return { post };
  } catch (error) {
    // console.error("Error fetching posts:", error);

    // loader-fetch-요청실패
    return "연결실패";
  }
}
