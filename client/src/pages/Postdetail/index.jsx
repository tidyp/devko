import {
  readPost,
  readComments,
  createComment,
  deletePost,
} from "../../api/apiDevko";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation
} from "react-router-dom";
import { VscKebabVertical } from "react-icons/vsc";
import Button from "../../components/Button";
import cookie from "react-cookies";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Postdetail = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { post, comments } = useLoaderData();
  const { pathname } = useLocation();
  let [data] = post;
  console.log(data);
  const commentsData = comments.currPageRows.slice().reverse();

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
        commentId: Math.round(Math.random()*100000),
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
      await deletePost(data.postId);
      window.location.reload();
      // navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      <div className="flex w-full flex-col ">
        <div className="flex flex-col gap-8 rounded-md bg-slate-50 p-12 text-start">
          <p className="text-gray-700">카테고리: {data.category}</p>
          <header className="flex items-center justify-between text-xl">
            <div className="flex items-center gap-4">
              <img
                className="className=h-16 w-16 rounded-full bg-gray-300"
                src={data.profileImage}
                alt=""
              />
              <div>
                <p className="text-lg font-semibold">id</p>
                <p className="text-gray-700">{data.userId}</p>
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
                    <Link to={`/edit/${data.postId}`}>수정</Link>
                  </span>
                  <span
                    className="w-12 cursor-pointer"
                    onClick={() => clickdeletePost(data.postId)}
                  >
                    삭제
                  </span>
                </div>
              )}
            </div>
          </header>
          <div className="mt-4 flex flex-col gap-8">
            <h1 className="mb-4 text-3xl font-bold">제목: {data.title}</h1>

            <p className="text-gray-700">본문: {data.content}</p>
            <p className="text-gray-700">{data.createdAt}</p>
            <p className="text-gray-700">{data.updatedAt}</p>
            <p className="text-gray-700">{`#${data.tagName}`}</p>
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
              <Button color="bg-blue-500" type="submit" onClick={handleSubmit}>
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
                  src={data.profileImage}
                  alt=""
                />
                <p className="text-gray-700">{el.content}</p>
                <p className="font-semibold text-gray-700">{el.createdAt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Postdetail;

export async function loader({ params }) {
  try {
    const post = await readPost(params.id);
    const comments = await readComments(params.id);
    return { post, comments };
  } catch (error) {
    // console.error("Error fetching posts:", error);

    // loader-fetch-요청실패
    return "연결실패";
  }
}
