// import postsData from "../../data/posts.json";
import { Link } from "react-router-dom";

import { readPosts } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";

const index = () => {
  const posts = useLoaderData();

  return (
    <>
      <ul className="flex w-full flex-col items-start">
        {posts.map((el) => {
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
