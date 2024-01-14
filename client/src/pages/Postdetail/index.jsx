import PopTags from "../../components/PopTags";
import TopWriters from "../../components/TopWriters";

import { readPost, readComments } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";
import { VscKebabVertical } from "react-icons/vsc";

const Postdetail = () => {
  const { post, comment } = useLoaderData();
  let [data] = post;

  console.log(comment);

  return (
    <>
      <div className="box-border flex justify-center">
        <div className="box-border flex w-[80rem] gap-4">
          <div className="flex flex-col gap-2">
            <PopTags />
            <TopWriters />
          </div>
          <div className="flex w-full flex-col items-start ">
            <div className="flex w-full flex-col  ">
              <div className=" rounded-md bg-slate-50 p-4 pl-8 text-start">
                <header className="flex justify-between">
                  <span>유저이미지</span>
                  <p>유저아이디</p>
                  <p className="text-gray-700">{data.userId}</p>
                  <VscKebabVertical />
                </header>
                <body className="flex flex-col gap-8">
                  <p>제목</p>
                  <h1 className="mb-4 text-3xl font-bold">{data.title}</h1>
                  <p>카테고리</p>
                  <p className="text-gray-700">{data.category}</p>

                  <p>본문</p>
                  <p className="text-gray-700">{data.content}</p>
                  <p className="text-gray-700">{data.createdAt}</p>
                  <p className="text-gray-700">{data.updatedAt}</p>
                </body>
              </div>
            </div>
            {/*  */}
            <div className="mt-8 flex w-full  flex-col">
              <div className=" rounded-md bg-slate-50 p-4 pl-8 text-start">
                <h2 className="mb-4 text-2xl font-bold">댓글</h2>
                <div>
                  {/* {comment.map((el) => (
                    <div key={el.commentId} className="mb-4 bg-gray-100 p-4">
                    <p className="text-gray-700">{el.userId}</p>
                  <p className="text-gray-700">{el.commentContent}</p> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
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
