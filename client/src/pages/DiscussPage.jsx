import { useLoaderData, Link, Outlet } from "react-router-dom";

import { readDiscussPosts } from "../api/apiDevko";

import AlertsBox from "../components/AlertsBox";
import OnelineList from "../components/OnelineList";
import Button from "../components/Button";
import Pagination from "../components/Pagination";

const DiscussPage = () => {
  const pageTab = "discuss";
  const posts = useLoaderData();
  const postsList = posts.currPageRows;

  return (
    <div className="mt-16 flex w-full flex-col items-center justify-center gap-2 ">
      <Outlet />
      <div className="flex w-[80rem] items-center justify-center gap-8 px-4 text-3xl font-bold">
        <h2 className="uppercase">{pageTab}</h2>
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
          {console.log(posts.length)}

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
      {posts.length === undefined && posts.length <= 0 && (
        <AlertsBox>작성된 글이 없 습니다.</AlertsBox>
      )}
      {posts.length !== undefined && (
        <Pagination
          tab={pageTab}
          curPage={posts.page}
          totalPage={posts.totalPages}
        />
      )}
    </div>
  );
};

export default DiscussPage;

export async function loader({ params }) {
  try {
    const data = await readDiscussPosts(params.id);
    return data;
  } catch (error) {
    return "연결실패";
  }
}
