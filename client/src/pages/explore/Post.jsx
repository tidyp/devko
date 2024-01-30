import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cookie from "react-cookies";

import { TbTrash, TbEdit } from "react-icons/tb";
import { PiSiren } from "react-icons/pi";
import { GoEye, GoComment, GoHeart, GoHeartFill } from "react-icons/go";

import { deletePost } from "../../api/apiDevko";
import { formatDate } from "../../utils/utils";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const [isClickLike, setIsClickLike] = useState(false);

  const useruuid = cookie.load("uuid");

  const data = formatDate(post.createdAt);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const tagss =
    typeof post.tagName === "string"
      ? post.tagName.split(",").map((el, index) => {
          if (el.trim() === "javascript") {
            return (
              <span className="rounded-lg bg-[#F7DF1E] px-4 py-1" key={index}>
                #{el.trim()}
              </span>
            );
          } else if (el.trim() === "mysql") {
            return (
              <span
                className="rounded-lg bg-[#4479A1] px-4 py-1 text-white"
                key={index}
              >
                #{el.trim()}
              </span>
            );
          } else {
            return (
              <span
                className="rounded-lg px-4 py-1"
                key={index}
                style={{ backgroundColor: getRandomColor() }}
              >
                #{el.trim()}
              </span>
            );
          }
        })
      : "";

  const fetchData = async (id, isLike) => {
    try {
      const res = await fetch(`http://localhost:3000/api/like/${post.postId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
          isLiked: isLike,
        }),
      });

      if (res.ok) {
      } else {
        console.error("Failed to like post");
      }
    } catch (error) {
      console.error("Error while liking post", error);
    }

    navigate("/");
  };

  // 좋아요 클릭 이벤트
  const handleLikeClick = async () => {
    // 좋아요 상태 변경
    await setIsClickLike((prev) => !prev);
    await fetchData(useruuid, isClickLike);
  };

  const clickdeletePost = async () => {
    await deletePost(post.postId);
    navigate("/");
  };

  console.log(post.profileImage);
  console.log(post.profileImage);
  console.log(post.profileImage);
  console.log(post.profileImage);
  return (
    <div className="m-2 flex h-fit w-[64rem] flex-col items-start justify-start gap-5 rounded-[10px] bg-slate-50">
      <div className="flex w-full justify-between">
        <div className="flex items-center justify-center gap-2.5 self-stretch">
          <Link className="h-12 w-12" to={`/userinfo/${post.userId}`}>
            {/* <img
                className="h-12 w-12 rounded-lg"
                src={`${"post.profileImage"}`}
                alt={post.profileImage}
              /> */}
            <img
              className="h-full w-full rounded-lg"
              src={
                post.profileImage
                  ? `${post.profileImage}`
                  : `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${Math.floor(
                      Math.random() * 16,
                    )}`
              }
              alt={post.profileImage}
            />
          </Link>

          <div className="flex h-14  basis-0 flex-col items-start justify-center">
            <div className="w-[50rem] truncate text-2xl font-semibold text-black">
              {post.title}
            </div>
            <div className="flex items-center justify-end gap-2.5">
              <div className="text-sm font-semibold text-blue-700">
                {post.userName || `DevKo`}
              </div>
              <div className="text-sm font-semibold text-zinc-500">{data}</div>
            </div>
          </div>
          <div className="flex gap-1">
            {post.userId === useruuid && (
              <>
                <span className="bf flex w-8 cursor-pointer flex-col">
                  <Link to={`/edit/${post.postId}`}>
                    <TbEdit />
                  </Link>
                </span>
                <span
                  className="w-8 cursor-pointer"
                  onClick={() => clickdeletePost(post.postId)}
                >
                  <TbTrash />
                </span>
              </>
            )}

            <span className="w-8 cursor-pointer">
              <Link>
                <PiSiren />
              </Link>
            </span>
            {/* <VscKebabVertical
              onClick={handleOpen}
              className="relative cursor-pointer"
            /> */}
            {/* 수정-삭제 모달 데이터전달 */}
            {/* {isOpenEdit && <Modal onClose={handleClose}></Modal>} */}
          </div>
        </div>
      </div>
      <Link to={`/${post.category}/detail/${post.postId}`}>
        <div className="w-[50rem] self-stretch text-clip text-base font-medium text-zinc-500">
          {post.content}
        </div>
      </Link>

      <div className="flex items-start justify-between gap-2.5 self-stretch pr-16">
        <div className="flex gap-2">{tagss}</div>
        <div className="flex items-center justify-center gap-4">
          <GoComment />
          <span>{post.commentCnt > 0 ? post.commentCnt : 0}</span>
          <GoEye />
          <span>{post.viewCnt}</span>
          {post.likeUser === useruuid ? (
            <GoHeartFill
              className="scale-150 transform text-red-600 hover:scale-150"
              onClick={handleLikeClick}
            />
          ) : (
            <GoHeart className="hover:scale-150" onClick={handleLikeClick} />
          )}

          <span>{post.likeCnt}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
