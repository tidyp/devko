import { readQnaPosts } from "../../api/apiDevko";
import { useLoaderData, Link, Navigate, useNavigate } from "react-router-dom";

import { formatDate } from "../../utils/utils";

import { GoEye, GoComment, GoHeart, GoHeartFill } from "react-icons/go";
import { useState } from "react";

const index = () => {
  const navigate = useNavigate();

  const posts = useLoaderData();
  const postsList = posts.currPageRows;
  const curPage = posts.page;
  const totalPage = posts.totalPages;
  const [isClickLike, setIsClickLike] = useState(false);

  // 좋아요 클릭 이벤트
  const handleLikeClick = async () => {
    setIsClickLike((prev) => !prev);
    try {
      const res = await fetch(`http://localhost:3000/api/like/${post.id}`, {
        method: "POST",
      });

      if (res.ok) {
      } else {
        console.error("Failed to like post");
      }
    } catch (error) {
      console.error("Error while liking post", error);
    }
  };

  // 페이지이동
  const handlePageChange = (item) => {
    navigate(`/qna/${item}`);
  };

  return (
    <>
      <ul className="flex w-full flex-col items-start">
        {postsList.map((el) => {
          return (
            <>
              <li key={el.title} className="group mb-4 w-full">
                <Link to={`/${el.category}/detail/${el.postId}`}>
                  <div className="flex transform items-center justify-between rounded-lg border bg-white p-4 transition-all duration-300 ease-in-out hover:scale-105 group-hover:bg-gray-100 group-hover:shadow-lg">
                    <div className="flex gap-2">
                      <img
                        className="w-8 rounded-full"
                        src={el.profileImage}
                        alt=""
                      />
                      <span className="text-blue-700">{el.userName}</span>
                    </div>
                    <span className="mb-2 text-xl font-semibold">
                      {el.title}
                    </span>

                    <div className="flex items-center justify-center gap-4">
                      <GoComment />
                      <span>{el.commentCnt > 0 ? el.commentCnt : 0}</span>
                      <GoEye />
                      <span>{el.viewCnt}</span>
                      {isClickLike ? (
                        <GoHeartFill
                          className="scale-150 transform text-red-600 hover:scale-150"
                          onClick={handleLikeClick}
                        />
                      ) : (
                        <GoHeart
                          className="hover:scale-150"
                          onClick={handleLikeClick}
                        />
                      )}

                      <span>{el.likeCnt}</span>
                    </div>

                    <span className="text-gray-700">
                      {formatDate(el.createdAt)}
                    </span>
                  </div>
                </Link>
              </li>
            </>
          );
        })}
      </ul>
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
    </>
  );
};

export default index;

export async function loader({ params }) {
  try {
    const board = await readQnaPosts(params.id);
    return board;
  } catch (error) {
    return "연결실패";
  }
}
