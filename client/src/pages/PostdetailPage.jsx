import {
  readDetailPost,
} from "../api/apiDevko";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { VscKebabVertical } from "react-icons/vsc";
import Button from "../components/Button";
import cookie from "react-cookies";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const PostDetailPage = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { discussDetail, discussComments } = useLoaderData();
  const { pathname } = useLocation();

  console.log(discussDetail, discussComments)

  const postData = discussDetail[0];
  const commentsData = discussComments.currPageRows.slice().reverse();
  console.log(postData, commentsData);

  const navigate = useNavigate();
  const navigation = useNavigation();

  const username = cookie.load("uuid");

  // 댓
  const [commentContent, setCommentContent] = useState("");

  const handleCommentChange = (e) => {
    setCommentContent(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createComment({
        postId: data.postId,
        commentId: Math.round(Math.random() * 100000),
        userId: username,
        commentContent: commentContent,
      });
      setCommentContent("");
      navigate(pathname);
    } catch (error) {}
  };

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
    setDropdownOpen((prev) => !prev);
  };

  const clickdeletePost = async () => {
    try {
      await deletePost(postData.postId);
      window.location.reload();
      // navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };


  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 pt-8">
        <div className="flex w-[80rem] flex-col  items-start justify-center gap-4">
          <div className="flex w-full flex-col ">
            <div className="flex flex-col gap-8 rounded-md bg-slate-50 p-12 text-start">
              <p className="text-gray-700">카테고리: {postData.category}</p>
              <header className="flex items-center justify-between text-xl">
                <div className="flex items-center gap-4">
                  <img
                    className="className=h-16 w-16 rounded-full bg-gray-300"
                    src={
                      postData.profileImage ||
                      `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${Math.floor(
                        Math.random() * 16,
                      )}`
                    }
                    alt=""
                  />
                  <div>
                    <p className="text-lg font-semibold">id</p>
                    <p className="text-gray-700">{postData.userId}</p>
                  </div>
                </div>
                <div className="relative cursor-pointer">
                  <VscKebabVertical
                    onClick={toggleDropdown}
                    className="text-gray-600"
                  />
                  {isDropdownOpen && (
                    <div className="item translate3d absolute right-2 flex flex-col items-center justify-center rounded border bg-white p-2 px-4 shadow-md">
                      <span className="w-12 cursor-pointer">
                        <Link to={`/edit/${postData.postId}`}>수정</Link>
                      </span>
                      <span
                        className="w-12 cursor-pointer"
                        onClick={() => clickdeletePost(postData.postId)}
                      >
                        삭제
                      </span>
                    </div>
                  )}
                </div>
              </header>
              <div className="mt-4 flex flex-col gap-8">
                <h1 className="mb-4 text-2xl font-bold">
                  제목: {postData.title}
                </h1>

                <p className="text-gray-700">본문: {postData.content}</p>
                <p className="text-gray-700">{postData.createdAt}</p>
                <p className="text-gray-700">{postData.updatedAt}</p>
                <p className="text-gray-700">{`#${postData.tagName}`}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex w-full flex-col">
            <div className="rounded-md bg-slate-50 p-4 pl-8 text-start">
              <h2 className="mb-4 text-2xl font-bold">댓글</h2>
              <form>
                <div>
                  <input
                    className="h-24 w-full"
                    type="text"
                    value={commentContent}
                    onChange={handleCommentChange}
                    placeholder="댓글을 작성하세요"
                  />
                </div>
                <div>
                  <Button
                    color="bg-blue-500"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    작성하기
                  </Button>
                </div>
              </form>

              <div>
                {commentsData.map((el) => (
                  <div
                    key={el.commentId}
                    className=" mb-4 flex justify-between rounded-md bg-gray-100 p-4"
                  >
                    <img
                      className="className=h-8 w-8 rounded-full bg-gray-300"
                      src={postData.profileImage}
                      alt=""
                    />
                    <p className="text-gray-700">{el.content}</p>
                    <p className="font-semibold text-gray-700">
                      {el.createdAt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetailPage;

export async function loader({ request }) {
  const category = request.url.split("/")[3];
  const id = request.url.split("/")[5];
  try {
    const data = await readDetailPost(category, id);
    // const comments = await readDiscussComments(params.id);
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    // loader-fetch-요청실패
    return "연결실패";
  }
}
