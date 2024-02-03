import { useLoaderData, Link, Outlet } from "react-router-dom";

import { readQnaPosts } from "../api/apiDevko";

import AlertsBox from "../components/AlertsBox";
import OnelineList from "../components/OnelineList";
import Button from "../components/Button";
import Pagination from "../components/Pagination";

const QuestionsPage = () => {
  const posts = useLoaderData();
  const postsList = posts.currPageRows;
  console.log(posts)
  console.log(postsList)

  return (
    <>
      <Outlet />
      <div className="mt-16 flex w-full flex-col items-center justify-center gap-2 ">
        <div className="flex w-[80rem] items-center justify-center gap-8 px-4 text-3xl font-bold">
          <h2>Q&amp;A</h2>
        </div>
        <div className="my- flex w-[80rem] items-center justify-between px-4">
          <ul className="flex items-start gap-2 text-left text-xl font-semibold">
            <li>정렬기준</li>
          </ul>
          <Link to="write">
            <Button color="bg-black" px="8">
              글 작성
            </Button>
          </Link>
        </div>
        <div className="flex w-[80rem] items-start justify-center gap-4">
          {/* Posts */}
          <div className="flex w-full items-start justify-center">
            {posts.length >= 0 && <AlertsBox>작성된 글이 없 습니다.</AlertsBox>}
            {posts.length < 0 && posts === "연결실패" ? (
              // connect fail
              <AlertsBox>서버에 연결되어있지 않습니다.</AlertsBox>
            ) : (
              posts && (
                <div className="box-border flex w-full flex-col items-center justify-center gap-4">
                  <ul className="flex w-full flex-col">
                    {postsList.map((post) => (
                      <OnelineList key={post.postId} {...post} />
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>

        <Pagination
          tab={"questions"}
          curPage={posts.page}
          totalPage={posts.totalPages}
        />
      </div>
    </>
  );
};

export default QuestionsPage;

export async function loader({ params }) {
  try {
    const data = await readQnaPosts(params.id);
    return data;
  } catch (error) {
    return "연결실패";
  }
}
