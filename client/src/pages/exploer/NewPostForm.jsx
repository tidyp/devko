import { useState, useEffect } from "react";
import { createPost } from "../../api/apiDevko";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";

const NewPostForm = ({ onClose }) => {
  const navigate = useNavigate()
  const username = cookie.load("userId");
  console.log(username)
  const handleClose = () => {
    onClose();
  };

  const [post, setPost] = useState({
    category: "",
    title: "",
    content: "",
    userId: username,
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const category = formData.get("category");
    const title = formData.get("title");
    const content = formData.get("content");

    console.log("Category:", category);
    console.log("Title:", title);
    console.log("Content:", content);

    try {
      const response = await createPost({
        username,
        category,
        title,
        content,
        googleId: username,
      });

      console.log("Response:", response);
      handleClose();
      navigate("/")
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="p-12" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          카테고리
        </label>
        <input
          className="mt-3 w-full rounded-md border"
          type="text"
          name="category"
          required
        />
      </div>
      <div>
        <input
          className="mt-3 w-full rounded-full border bg-blue-200"
          type="text"
          name="title"
          placeholder="제목을 입력하세요"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">내용</label>
        <textarea
          className="mt-3 w-full rounded-md border p-12"
          name="content"
          required
        />
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="rounded-full bg-blue-500 px-4 py-2 text-white"
        >
          게시물 작성
        </button>
        <button
          type="button" // Change to button type
          className="rounded-full bg-blue-500 px-4 py-2 text-white ml-2"
          onClick={handleClose}
        >
          닫기
        </button>
      </div>
    </form>
  );
};

export default NewPostForm;
