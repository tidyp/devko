import { readPost, readComments, createComment } from "../../api/apiDevko";
import { useLoaderData, useParams } from "react-router-dom";
import { VscKebabVertical } from "react-icons/vsc";
import Button from "../../components/Button";
import cookie from "react-cookies";

const Postdetail = () => {
  const { params } = useParams();
  const { post, comment } = useLoaderData();
  let [data] = post;
  console.log(params);

  const username = cookie.load("userId");
  console.log(comment);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createComment({
        postId: params,
        userID: username,
      });
      console.log("Response:", response);
      // navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex w-full flex-col ">
        <div className="flex flex-col gap-8 rounded-md bg-slate-50 p-12 text-start">
          <p className="text-gray-700">카테고리: {data.category}</p>
          <header className="flex items-center justify-between text-xl">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gray-300">
                {/* 이미지 */}
              </div>
              <div>
                <p className="text-lg font-semibold">id</p>
                <p className="text-gray-700">{data.userId}</p>
              </div>
            </div>
            <div className="cursor-pointer">
              <VscKebabVertical className="text-gray-600" />
            </div>
          </header>
          <body className="mt-4 flex flex-col gap-8">
            <h1 className="mb-4 text-3xl font-bold">제목: {data.title}</h1>

            <p className="text-gray-700">본문: {data.content}</p>
            <p className="text-gray-700">{data.createdAt}</p>
            <p className="text-gray-700">{data.updatedAt}</p>
          </body>
        </div>
      </div>

      <div className="mt-4 flex w-full flex-col">
        <div className="rounded-md bg-slate-50 p-4 pl-8 text-start">
          <h2 className="mb-4 text-2xl font-bold">댓글</h2>
          <div>
            <input className="h-24 w-full" type="text" />
          </div>
          <div>
            <Button color="bg-blue-500" onClick={handleSubmit}>
              작성하기
            </Button>
          </div>
          <div>
            {/* {comments.map((el) => (
              <div key={el.commentId} className="mb-4 bg-gray-100 p-4 rounded-md">
                <p className="text-gray-700 font-semibold">{el.userId}</p>
                <p className="text-gray-700">{el.commentContent}</p>
              </div>
            ))} */}
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
    const comment = await readComments(params.id);
    return { post, comment };
  } catch (error) {
    // console.error("Error fetching posts:", error);

    // loader-fetch-요청실패
    return "연결실패";
  }
}
