// import postsData from "../../data/posts.json";

import { searchResult } from "../../api/apiDevko";
import { useLoaderData } from "react-router-dom";

import PopTags from "../../components/PopTags";
import TopWriters from "../../components/TopWriters";

const index = () => {
  const result = useLoaderData();
  console.log(result);

  return (
    <>
      <div className="box-border flex justify-center">
        <div className="box-border flex w-[80rem] gap-4">
          <div className="flex flex-col gap-2">
            <PopTags />
            <TopWriters />
          </div>
          <div className="flex w-full flex-col items-start text-center">
            {result.currPageRows.map((post) => (
              <div key={post.id} className="my-4 rounded-md border p-4">
                {/* Display post content */}
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-600">{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

export async function loader() {
  try {
    const res = await searchResult();
    return res;
  } catch (error) {
    // console.error("Error fetching posts:", error);

    // loader-fetch-요청실패
    return "연결실패";
  }
}
