import { useState } from "react";
import cookie from "react-cookies";

import {
  useLoaderData,
  Link,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { readDiscussPosts } from "../api/apiDevko";

import ModalOld from "../components/ModalOld";
import PopTags from "../components/PopTags";
import TopWriters from "../components/TopWriters";
import AlertsBox from "../components/AlertsBox";
import OnelineList from "../components/OnelineList";

const DiscussPage = () => {
  const navigate = useNavigate();

  const posts = useLoaderData();
  console.log(posts);
  const postsList = posts.currPageRows;
  const curPage = posts.page;
  const totalPage = posts.totalPages;

  const useruuid = cookie.load("uuid");

  const isLogin = cookie.load("uuid");

  // 페이지이동
  const handlePageChange = (item) => {
    navigate(`/discuss/${item}`);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-8">
      <div className="flex w-[80rem] items-start justify-center gap-4">

        {/* Posts */}
        <div className="flex w-full items-start justify-center">
          {posts.length >= 0 && <AlertsBox>작성된 글이 없 습니다.</AlertsBox>}
          {posts.length < 0 && posts === "연결실패" ? (
            // connect fail
            <AlertsBox>서버에 연결되어있지 않습니다.</AlertsBox>
          ) : (
            posts && (
              <div className="box-border flex w-full flex-col items-center justify-center gap-4">
                <ul className="flex w-full flex-col">
                  {postsList.map((post) => (
                    <OnelineList key={post.postId} {...post} />
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
      <div className="box-border flex w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full items-center justify-center gap-8 pb-8">
          <button
            onClick={() => handlePageChange(curPage - 1)}
            disabled={curPage === 1}
            className={`rounded-md px-4 py-2 ${
              curPage === 1
                ? "cursor-not-allowed bg-gray-300 text-gray-500"
                : "focus:shadow-outline-blue bg-blue-500 text-white hover:bg-blue-600 focus:outline-none active:bg-blue-800"
            }`}
          >
            Previous
          </button>
          <span className="text-lg">
            Page {curPage}/{totalPage}
          </span>
          <button
            onClick={() => handlePageChange(curPage + 1)}
            disabled={curPage === totalPage}
            className={`rounded-md px-4 py-2 ${
              curPage === totalPage
                ? "cursor-not-allowed bg-gray-300 text-gray-500"
                : "focus:shadow-outline-blue bg-blue-500 text-white hover:bg-blue-600 focus:outline-none active:bg-blue-800"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscussPage;

export async function loader({ params }) {
  console.log(params.id);
  try {
    const board = await readDiscussPosts(params.id);
    return board;
  } catch (error) {
    return "연결실패";
  }
}
