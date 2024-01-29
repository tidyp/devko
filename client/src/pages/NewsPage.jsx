import { readPosts } from "../api/apiDevko";
import { useLoaderData, Link } from "react-router-dom";
import { formatDate } from "../utils/utils";
import { GoEye, GoComment, GoHeart, GoHeartFill } from "react-icons/go";
import { IoMdMail, IoMdMailOpen } from "react-icons/io";

const NewsPage = () => {
  const data = useLoaderData();
  const filterData = data.filter((item) => item.category === "news");
  console.log(filterData);

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-2">
      <ul className="w-[80rem] items-start justify-start text-start ">
        {filterData.map((el) => (
          <Link to={el.content}>
            <li className="flex flex-col gap-4 border-b-4 border-stone-200 py-2">
              <div className="flex gap-2 text-xl font-semibold items-center">
                {<IoMdMail  className="text-violet-700"/> || <IoMdMailOpen />}
                {el.title}
              </div>
              <div className="flex justify-between">
                <div>{el.userId}</div>
                <div className="flex items-center justify-center gap-2">
                  <div>{formatDate(el.updatedAt)}</div>
                  <GoEye />
                  <div>{el.viewCnt}</div>
                </div>
              </div>
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
