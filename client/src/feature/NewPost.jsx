import { useState, useReducer } from "react";
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

// const initialState = {
//   selectedCategory: "discuss",
//   post: {
//     title: "",
//     content: "",
//     tags: [],
//   },
//   event: {
//     startDate: new Date(),
//     endDate: new Date(),
//   },
//   group: {
//     startDate: new Date(),
//     endDate: new Date(),
//     location: "",
//     section: "",
//     members: 1,
//     workPosition: "",
//   },
// };

const initialState = {
  selectedCategory: "discuss",
  post: {
    title: "",
    content: "",
    tags: [],
    startDate: new Date(),
    endDate: new Date(),
    location: "",
    section: "",
    members: 1,
    workPosition: "",
  },
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_CATEGORY":
//       return { ...state, selectedCategory: action.payload };
//     case "SET_DATES":
//       return { ...state, dates: action.payload };
//     case "SET_TAGS":
//       return { ...state, tags: action.payload };
//     case "SET_POST":
//       return { ...state, post: action.payload };
//     default:
//       return state;
//   }
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        post: { ...state.post, [action.payload.key]: action.payload.value },
      };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};

const NewPost = () => {
  const navigate = useNavigate();
  const username = cookie.load("uuid");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  console.log(state.post.tags);

  // 카테고리
  const handleCategoryChange = (categoryId) => {
    dispatch({ type: "SET_CATEGORY", payload: categoryId });
  };

  const handleDateChange = (key, value) => {
    dispatch({ type: "SET_FIELD", payload: { key, value } });
    if (key === "startDate" && state.selectedCategory === "event") {
      dispatch({ type: "SET_FIELD", payload: { key: "endDate", value } });
    }
  };

  // 태그 추가 수정
  const handleTagChange = (value, index) => {
    const updatedTags = [...state.post.tags, value];
    // updatedTags[index] = ;
    dispatch({
      type: "SET_FIELD",
      payload: { key: "tags", value: updatedTags },
    });
  };

  const handleChange = (key, value, index) => {
    if (key === "tags") {
      handleTagChange(value, index);
    } else if (key === "startDate" || key === "endDate") {
      handleDateChange(key, value);
    } else {
      dispatch({ type: "SET_FIELD", payload: { key, value } });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        ...state.post,
        userId: username,
        tags: state.post.tags.filter((tag) => tag.trim() !== ""),
      };

      if (
        state.selectedCategory === "event" ||
        state.selectedCategory === "group"
      ) {
        await createGroupPost(postData);
      } else {
        await createPost(postData);
      }

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
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`rounded-md border px-4 py-2 ${
                state.selectedCategory === category.id
                  ? "bg-gray-200  text-gray-700"
                  : "border-spacing-4 bg-white text-gray-700"
              }`}
              onClick={() => {
                handleCategoryChange(category.id);
              }}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between gap-2">
          <input
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            className="w-full rounded-lg border bg-gray-200 p-2"
            required
            value={state.post.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        {state.selectedCategory === "group" && (
          <div className="flex gap-2">
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className=" w-full rounded-lg border bg-gray-200 p-2"
              required
            />
            <input
              type="text"
              name="member"
              placeholder="Enter member"
              className=" w-full rounded-lg border bg-gray-200 p-2"
              required
            />
            <input
              type="text"
              name="workpostion"
              placeholder="Enter workpostion"
              className=" w-full rounded-lg border bg-gray-200 p-2"
              required
            />
          </div>
        )}
        {["event", "group"].includes(state.selectedCategory) && (
          <div className="flex gap-2">
            <input
              type="date"
              name="title"
              placeholder="Enter title"
              className=" w-full rounded-lg border bg-gray-200 p-2"
              required
              value={state.post.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
            />
            <input
              type="date"
              name="title"
              placeholder="Enter title"
              className=" w-full rounded-lg border bg-gray-200 p-2"
              required
              value={state.post.endDate}
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
            value={state.post.content}
            onChange={(e) => handleChange("content", e.target.value)}
          />
        </div>
        <div className="flex justify-between gap-4 p-2 bg-gray-200">
          <div className="flex">
            {state.post.tags.map((el) => (
              <span className="p-2">{el}</span>
            ))}
          </div>
          <select
            className="rounded-lg border bg-gray-200 p-2"
            onChange={(e) => handleChange("tags", e.target.value)}
          >
            <option value="">태그를 선택해주세요</option>
            <option value="javascript">javascript</option>
            <option value="node">node</option>
            <option value="react">react</option>
            <option value="next">next</option>
            <option value="express">express</option>
            <option value="nest">nest</option>
          </select>
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
