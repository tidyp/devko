import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import { useEffect, useRef, useState } from "react";
import cookie from "react-cookies";
import NewPost from "../../feature/NewPost";
import { deletePost } from "../../api/apiDevko";

import { VscKebabVertical } from "react-icons/vsc";
import { GoEye, GoComment, GoHeart, GoHeartFill } from "react-icons/go";

import Modal from "../../components/Model";

const Post = ({ post }) => {
  const [isClickLike, setIsClickLike] = useState(false);

  const useruuid = cookie.load("uuid");

  const data = formatDate(post.createdAt);

  const dropdownRef = useRef(null);

  const [isOpenEdit, setIsOpenEdit] = useState(false);

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
      const res = await fetch(`http://localhost:3000/api/like/${post.id}`, {
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

  const clickdeletePost = async () => {
    await deletePost(post.id);
    await handleClose();
  };

  return (
    <>
      <div className="m-2 flex h-fit w-full flex-col items-start justify-start gap-5 rounded-[10px] bg-slate-50 p-8">
        <div className="flex w-full justify-between">
          <div className="flex items-center justify-center gap-2.5 self-stretch">
            <Link to={`/userinfo/${post.userId}`}>
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
              onClick={handleOpen}
              className="relative cursor-pointer"
            />
            {/* 수정-삭제 모달 데이터전달 */}
            {isOpenEdit && (
              <Modal onClose={handleClose}>
                <span className="bf w-8 cursor-pointer">
                  <Link to={`/edit/${post.id}`}>수정</Link>
                </span>
                <span
                  className="w-8 cursor-pointer"
                  onClick={() => clickdeletePost(post.id)}
                >
                  삭제
                </span>
                <span className="w-8 cursor-pointer">
                  <Link>신고</Link>
                </span>
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
