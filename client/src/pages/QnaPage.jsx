import { useState } from "react";
import cookie from "react-cookies";

import {
  useLoaderData,
  Link,
  Navigate,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";

import { readQnaPosts } from "../api/apiDevko";

import ModalOld from "../components/ModalOld";
import PopTags from "../components/PopTags";
import TopWriters from "../components/TopWriters";
import AlertsBox from "../components/AlertsBox";
import OnelineList from "../components/OnelineList";
import Button from "../components/Button";

const QnaPage = () => {
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
    navigate(`/Qna/${item}`);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Outlet />
      <div className="mt-16 flex w-full flex-col items-center justify-center gap-2 ">
        <div className="flex w-[80rem] items-center justify-center gap-8 px-4 text-3xl font-bold">
          <h2>Q&amp;A</h2>
        </div>
        <div className="my- flex w-[80rem] items-center justify-between px-4">
          <ul className="flex items-start gap-2 text-left text-xl font-semibold">
            <li>정렬기준</li>
          </ul>
          <Link to="write">
            <Button color="bg-black" px="8">
              글 작성
            </Button>
          </Link>
        </div>
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
    </>
  );
};

export default QnaPage;

export async function loader({ params }) {
  console.log(params.id);
  try {
    const data = await readQnaPosts(params.id);
    return data;
  } catch (error) {
    return "연결실패";
  }
}
