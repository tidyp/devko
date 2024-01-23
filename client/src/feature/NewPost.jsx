// TODO: 날짜 상태관리 수정

import React, { useState } from "react";
import { createPost, createGroupPost } from "../api/apiDevko";
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
  const username = cookie.load("uuid");

  const [tags, setTags] = useState([]);
  console.log(tags);

  const [selectedCategory, setSelectedCategory] = useState("discuss");
  const [post, setPost] = useState({
    title: "",
    content: "",
    startDate: new Date(),
    endDate: new Date(),
    category: "discuss",
  });

  const handleAddTag = () => {
    setTags((prev) => [...prev, ""]);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setPost({ ...post, category: categoryId });
  };

  const handleChange = (key, value, index) => {
    if (key === "tags") {
      const updatedTags = [...tags];
      updatedTags[index] = value;
      setTags(updatedTags);
    } else {
      setPost((prevPost) => ({ ...prevPost, [key]: value }));
    }
  };

  const renderCategoryButton = (category) => (
    <button
      key={category.id}
      type="button"
      className={`rounded-md border px-4 py-2 ${
        selectedCategory === category.id
          ? "bg-gray-200  text-gray-700"
          : "border-spacing-4 bg-white text-gray-700"
      }`}
      onClick={() => handleCategoryChange(category.id)}
    >
      {category.label}
    </button>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // if (selectedCategory === "group") {
      //   const res = await createGroupPost({
      //     ...post,
      //     userId: username,
      //     tags: tags.filter((tag) => tag.trim() !== ""),
      //   });
      //   navigate("/");
      // }
      const res = await createPost({
        ...post,
        userId: username,
        tags: tags.filter((tag) => tag.trim() !== ""),
      });
      // if(res){
      //   navigate("/");
      // }
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
        <div className="flex items-center justify-start gap-2">
          {categories.map(renderCategoryButton)}
        </div>
        <div className="flex items-center justify-between gap-2">
          <input
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            className="w-full rounded-lg border bg-gray-200 p-2"
            required
            value={post.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        {post.category === "event" && (
          <div className="flex gap-2">
            <input
              type="date"
              name="title"
              placeholder="Enter title"
              className=" w-full rounded-lg border bg-gray-200 p-2"
              required
              value={post.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
            />
            <input
              type="date"
              name="title"
              placeholder="Enter title"
              className=" w-full rounded-lg border bg-gray-200 p-2"
              required
              value={post.endDate}
              onChange={(e) => handleChange("endDate", e.target.value)}
            />
          </div>
        )}
        <div>
          <textarea
            name="content"
            className=" h-96 w-full rounded-md border bg-gray-200 p-2"
            placeholder="내용을 입력하세요"
            required
            value={post.content}
            // onChange={handleChange}
            onChange={(e) => handleChange("content", e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <div className="bg-blue-400 p-2 rounded-xl"  onClick={handleAddTag}>+</div>
          {tags.map((tag, index) => (
            <div className="justify-start" key={index}>
              <select
                className="rounded-lg border bg-gray-200 p-2"
                value={tag}
                onChange={(e) => handleChange("tags", e.target.value, index)}
              >
                <option value="">태그를 선택해주세요</option>
                <option value="jo">jo</option>
                <option value="jae">jae</option>
                <option value="eun">eun</option>
              </select>
            </div>
          ))}
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
