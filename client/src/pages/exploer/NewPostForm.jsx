import React, { useState } from "react";
import { createPost } from "../../api/apiDevko";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: "discuss", label: "discuss" },
  { id: "qna", label: "qna" },
  { id: "event", label: "event" },
  { id: "group", label: "group" },
];

const NewPostForm = ({ onClose, editpost }) => {
  const navigate = useNavigate();
  const username = cookie.load("userId");

  const handleClose = () => onClose();

  const [post, setPost] = useState({
    category: editpost?.category || "",
    title: editpost?.title || "",
    content: editpost?.content || "",
    userId: username,
  });

  const [selectedCategory, setSelectedCategory] = useState(
    editpost?.category || "",
  );

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setPost({ ...post, category: categoryId });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  // TODO: button components recycle 추가할 것(1).
  const renderButton = (label, onClick) => (
    <button
      type="button"
      className="rounded-full bg-blue-500 px-4 py-2 text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );

  // TODO: button recycle components 추가할 것(2).
  const renderCategoryButton = (category) => (
    <button
      key={category.id}
      type="button"
      className={`mt-3 rounded-md border px-4 py-2 ${
        selectedCategory === category.id
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-700"
      }`}
      onClick={() => handleCategoryChange(category.id)}
    >
      {category.label}
    </button>
  );

  // submit => react-router-dom: action 처리
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createPost({ ...post, userId: username });
      console.log("Response:", response);
      handleClose();
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="px-4 py-12" onSubmit={handleSubmit}>
      <div className="flex items-center justify-between gap-2">
        {categories.map(renderCategoryButton)}
      </div>
      <div>
        <input
          type="text"
          name="title"
          placeholder="제목을 입력하세요"
          className="mt-3 w-full rounded-lg border bg-blue-200 p-2"
          required
          value={post.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          name="content"
          className="mt-3 h-80 w-full rounded-md border p-2"
          placeholder="내용을 입력하세요"
          required
          value={post.content}
          onChange={handleChange}
        />
      </div>
      <div className="mt-6">
        {renderButton("게시물 작성", handleSubmit)}
        {renderButton("닫기", handleClose)}
      </div>
    </form>
  );
};

export default NewPostForm;
