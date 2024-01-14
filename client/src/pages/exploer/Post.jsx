import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import { useEffect, useRef, useState } from "react";
import cookie from "react-cookies";
import NewPost from "../../feature/NewPost";

import { VscKebabVertical } from "react-icons/vsc";
import { GoEye, GoComment, GoHeart, GoHeartFill } from "react-icons/go";

import Modal from "../../components/Model";

const Post = ({ post }) => {
  const [isClickLike, setIsClickLike] = useState(false);
  console.log(post);

  const data = formatDate(post.createdAt);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    console.log("click");
    setDropdownOpen((prev) => !prev);
  };

  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const username = cookie.load("userId");

  const handleOpen = () => {
    setIsOpenEdit((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpenEdit(false);
  };

  // 좋아요 클릭 이벤트
  const handleLikeClick = async () => {
    setIsClickLike((prev) => !prev);
    try {
      const res = await fetch("http://localhost:3000/api/like/4", {
        method: "POST",
      });

      if (res.ok) {
        console.log("Post liked successfully");
      } else {
        console.error("Failed to like post");
      }
    } catch (error) {
      console.error("Error while liking post", error);
    }
  };

  return (
    <>
      <div className="m-2 flex h-fit w-full flex-col items-start justify-start gap-5 rounded-[10px] bg-slate-50 p-8">
        <div className="flex w-full justify-between">
          <div className="flex items-center justify-center gap-2.5 self-stretch">
            <Link to={`/userinfo`}>
              <img
                className="h-12 rounded-lg"
                src={post.profileImage}
                alt={post.profileImage}
              />
            </Link>

            <div className="flex h-14 shrink grow basis-0 flex-col items-start justify-center">
              <div className="text-2xl font-semibold text-black">
                {post.title}
              </div>
              <div className="flex items-center justify-end gap-2.5">
                <div className="text-sm font-semibold text-blue-700">
                  {post.userName}
                </div>
                <div className="text-sm font-semibold text-zinc-500">
                  {data}
                </div>
              </div>
            </div>
          </div>
          <div className="relative " ref={dropdownRef}>
            <VscKebabVertical
              onClick={toggleDropdown}
              className="relative cursor-pointer"
            />
            {/* 수정 */}
            {/* 삭제 */}
            {/* TODO: 새페이지로 */}
            {isDropdownOpen && (
              <div className="item translate3d absolute right-0.5 flex flex-col items-center justify-center rounded border bg-white p-2 px-4 shadow-md">
                <span className="w-8 cursor-pointer" onClick={handleOpen}>
                  {/* <Link to="">수정</Link> */}
                  수정
                </span>
                <span className="w-8 cursor-pointer">삭제</span>
              </div>
            )}
            {/* 수정-삭제 모달 데이터전달 */}
            {isOpenEdit && (
              <Modal onClose={handleClose}>
                <NewPost onClose={handleClose} editpost={post} />
              </Modal>
            )}
          </div>
        </div>
        <Link to={`/${post.category}/${post.id}`}>
          <div className="self-stretch  text-base font-medium text-zinc-500">
            {post.content}
          </div>
        </Link>

        <div className="flex items-start justify-between gap-2.5 self-stretch pr-8">
          <div className="flex gap-2">
            <span className="rounded-lg bg-red-400 px-4">태그1</span>
            <span className="rounded-lg bg-indigo-400 px-4">태그2</span>
            <span className="rounded-lg bg-violet-400 px-4">태그3</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <GoComment />
            <span>0</span>
            <GoEye />
            <span>{post.count}</span>
            {isClickLike ? (
              <GoHeartFill
                className="scale-150 transform text-red-600 hover:scale-150"
                onClick={handleLikeClick}
              />
            ) : (
              <GoHeart className="hover:scale-150" onClick={handleLikeClick} />
            )}

            <span>0</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
