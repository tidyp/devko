import { Link } from "react-router-dom";

import { readPosts } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";

import { formatDate } from "../../utils/utils";

import { GoEye, GoComment, GoHeart, GoHeartFill } from "react-icons/go";
import { useState } from "react";

const index = () => {
  const posts = useLoaderData();
  const [isClickLike, setIsClickLike] = useState(false);
  console.log(posts);

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

  return (
    <>
      <ul className="flex w-full flex-col items-start">
        {posts.map((el) => {
          return (
            <>
              <li key={el.title} className="group mb-4 w-full">
                <Link to={`/${el.category}/${el.id}`}>
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
                      <span>{el.commentCnt}</span>
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
      <div className="flex w-full items-center justify-center">
        {/* TODO: pagination */}
        page {posts.page}/{posts.totalPages}
      </div>
    </>
  );
};

export default index;

export async function loader() {
  try {
    const board = await readPosts();
    return board;
  } catch (error) {
    // console.error("Error fetching posts:", error);

    // loader-fetch-요청실패
    return "연결실패";
  }
}
