import { useState } from "react";
import { createPost } from "../../api/apiDevko";

const NewPostForm = () => {
  const [post, setPost] = useState({
    category: "",
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const category = formData.get("category");
    const title = formData.get("title");
    const content = formData.get("content");

    console.log("Category:", category);
    console.log("Title:", title);
    console.log("Content:", content);

    createPost({
      category,
      title,
      content
    });
  };

  return (
    <form className="p-12" onSubmit={handleSubmit}>
      <div className="grid w-[60rem] grid-cols-1 gap-12">
        <div>Buat pertanyaan baru</div>
        <div>Judul Pertanyaan</div>
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
            placeholder="제목을 입력하세요"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            내용
          </label>
          <textarea className="mt-3 w-full rounded-md border p-12" required />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="mr-12 rounded-md bg-blue-500 px-24 py-4 text-white"
          >
            <span>작성</span>
          </button>
          <button className="rounded-md bg-blue-500 px-24 py-4 text-white">
            <span>취소</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewPostForm;
