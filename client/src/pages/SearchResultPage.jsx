// import postsData from "../../data/posts.json";

import { searchResult } from "../api/apiDevko";
import { useLoaderData, Link } from "react-router-dom";

const searchResultPage = () => {
  const result = useLoaderData();

  const isData = result.currPageRows.length > 0;
  const numData = result.currPageRows.length;

  return (
    <>
      <ul className="flex w-full flex-col items-center justify-center">
        {!isData && <p className="p-8 text-3xl">검색 결과가 없습니다</p>}
        {isData && (
          <p className="p-8 text-3xl">{numData}개의 검색 결과를 찾았습니다.</p>
        )}
        {isData &&
          result.currPageRows.map((el) => {
            return (
              <>
                <li key={el.title} className="group mb-4 w-full">
                  <Link to={`/${el.category}/${el.id}`}>
                    <div className="flex transform items-center justify-between rounded-lg border bg-white p-4 transition-all duration-300 ease-in-out hover:scale-105 group-hover:bg-gray-100 group-hover:shadow-lg">
                      <img
                        className="w-8 rounded-full"
                        src={el.profileImage}
                        alt=""
                      />
                      <span className="text-blue-700">{el.userName}</span>
                      <span className="mb-2 text-xl font-semibold">
                        {el.title}
                      </span>
                      <span className="text-gray-700">{el.content}</span>
                      <span className="text-gray-700">{el.content}</span>
                      <span className="text-gray-700">{el.createdAt}</span>
                    </div>
                  </Link>
                </li>
              </>
            );
          })}
      </ul>
      <div className="flex w-full items-center justify-center">
        {/* TODO: pagination */}
        page {result.page}/{result.totalPages}
      </div>
    </>
  );
};

export default searchResultPage;

export async function loader({ params }) {
  const { id } = params;
  try {
    const res = await searchResult(id);
    return res;
  } catch (error) {
    // console.error("Error fetching posts:", error);

    // loader-fetch-요청실패
    return "연결실패";
  }
}
