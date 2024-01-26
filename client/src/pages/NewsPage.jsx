import { readPosts } from "../api/apiDevko";
import { useLoaderData, Link } from "react-router-dom";
import { formatDate } from "../utils/utils";
import { GoEye, GoComment, GoHeart, GoHeartFill } from "react-icons/go";

const NewsPage = () => {
  const data = useLoaderData();
  const filterData = data.filter((item) => item.category === "news");

  return (
    <div className="flex px-24">
      <ul className="items-start justify-start text-start ">
        {filterData.map((el) => (
          <Link to={el.content}>
            <li className="border-b-4 border-violet-200 py-2">
              <>
                <div className="font-semibold">{el.title}</div>
                <div className="flex justify-between">
                  <div>{el.userId}</div>
                  <div className="flex items-center justify-center gap-2">
                    <div>{formatDate(el.updatedAt)}</div>
                    <GoEye />
                    <div>{el.viewCnt}</div>
                  </div>
                </div>
              </>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;

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
