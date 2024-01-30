// import postsData from "../../data/posts.json";

import { readPosts } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import MainBackGround from "../../components/MainBackGround";
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
      <MainBackGround></MainBackGround>
      {/* Sidebar */}
      <div className="flex w-[80rem] items-start justify-center gap-4">
        <div className="flex gap-2">
          <div className="flex flex-col gap-4">
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
          {posts && posts.length > 0 && <PostList posts={posts} />}
          {posts.length <= 0 && posts && (
            <AlertsBox>작성된 글이 없습니다.</AlertsBox>
          )}
          {posts.length > 0 && posts === "연결실패" && (
            <AlertsBox>서버에 연결되어있지 않습니다.</AlertsBox>
          )}

          {posts.length > 0 && posts === "연결실패" && (
            <AlertsBox>서버에 연결되어있지 않습니다.</AlertsBox>
          )}

          {/* // connect fail */}
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
