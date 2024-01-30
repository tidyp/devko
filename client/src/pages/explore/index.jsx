// import postsData from "../../data/posts.json";

import { readPosts } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Banner2 from "../../components/Banner2";
import ModalOld from "../../components/ModalOld";
import PopTags from "../../components/PopTags";
import TopWriters from "../../components/TopWriters";
import cookie from "react-cookies";
import PostList from "./PostList";
import AlertsBox from "../../components/AlertsBox";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const index = () => {
  const posts = useLoaderData();
  const isLogin = cookie.load("uuid");

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Banner2>
        <div className="fixed z-50 flex w-[80rem] items-center justify-center rounded-3xl">
          <span className="m-auto flex text-7xl text-black">Devko</span>
        </div>
      </Banner2>
      {/* Sidebar */}
      <div className="flex w-[80rem] items-start justify-center gap-4">
        <div className="flex gap-2">
          <div className="flex flex-col gap-4">
            {isLogin ? (
              <Link to="/write">
                <button className="flex h-12 w-full flex-col items-center justify-center rounded-2xl  bg-indigo-700 text-xl text-white">
                  <div className="flex items-center">
                    <div>게시글 작성</div>
                  </div>
                </button>
              </Link>
            ) : (
              <button
                className="flex h-12 w-full flex-col items-center justify-center rounded-2xl  bg-indigo-700 text-xl text-white"
                onClick={handleOpen}
              >
                <div className="flex items-center">
                  <div>게시글 작성</div>
                </div>
              </button>
            )}
            <PopTags />
            <TopWriters />
          </div>
          {!isLogin && isOpen && (
            <ModalOld onClose={handleClose}>
              <p className="py-10">로그인이 필요합니다.</p>
              <Link to="/login" onClick={handleOpen}>
                <button className="rounded-xl bg-indigo-700 p-4 text-white">
                  로그인하러가기
                </button>
              </Link>
            </ModalOld>
          )}
        </div>
        {/* Posts */}
        <div className="flex w-full items-start justify-center">
          {posts.length <= 0 && <AlertsBox>작성된 글이 없습니다.</AlertsBox>}
          {posts.length > 0 && posts === "연결실패" ? (
            // connect fail
            <AlertsBox>서버에 연결되어있지 않습니다.</AlertsBox>
          ) : (
            posts && <PostList posts={posts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default index;

export async function loader() {
  try {
    const board = await readPosts();
    return board;
  } catch (error) {
    console.error("Error fetching posts:", error);
    // loader-fetch-요청실패
    return "연결실패";
  }
}
