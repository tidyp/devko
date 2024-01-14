import React, { useState } from "react";
import { createPost } from "../api/apiDevko";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const categories = [
  { id: "discuss", label: "Discuss" },
  { id: "qna", label: "Q&A" },
  { id: "event", label: "Event" },
  { id: "group", label: "Group" },
];

const NewPost = () => {
  const navigate = useNavigate();
  const username = cookie.load("userId");

  const [selectedCategory, setSelectedCategory] = useState("discuss");
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "discuss",
  });

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setPost({ ...post, category: categoryId });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createPost({ ...post, userId: username });
      console.log("Response:", response);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="flex w-full flex-col items-start">
      <form className="flex w-full flex-col gap-3 px-4" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between gap-2">
          {categories.map(renderCategoryButton)}
          <input
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            className="w-full rounded-lg border bg-blue-100 p-2"
            required
            value={post.title}
            onChange={handleChange}
          />
        </div>
        {post.category === "event" && (
          <div className="flex gap-2">
            <input
              type="date"
              name="title"
              placeholder="Enter title"
              className=" w-full rounded-lg border bg-blue-100 p-2"
              required
              value={post.title}
              onChange={handleChange}
            />
            <input
              type="date"
              name="title"
              placeholder="Enter title"
              className=" w-full rounded-lg border bg-blue-100 p-2"
              required
              value={post.title}
              onChange={handleChange}
            />
          </div>
        )}
        <div>
          <textarea
            name="content"
            className=" h-96 w-full rounded-md border bg-blue-100 p-2"
            placeholder="내용을 입력하세요"
            required
            value={post.content}
            onChange={handleChange}
          />
        </div>

        <div className="mt-6">
          <Button color="bg-blue-500" onClick={handleSubmit}>
            작성하기
          </Button>
          <Button color="bg-blue-500" onClick={handleCancel}>
            취소하기
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
