import { readPosts } from "../api/apiDevko";
import { useLoaderData, Link } from "react-router-dom";
import { formatDate } from "../utils/utils";
import { GoEye, GoComment, GoHeart, GoHeartFill } from "react-icons/go";
import { IoMdMail, IoMdMailOpen } from "react-icons/io";
import Button from "../components/Button";

const NewsPage = () => {
  const data = useLoaderData();
  const filterData = data.filter((item) => item.category === "news");
  console.log(filterData);

  return (
    <div className="mt-16 flex w-full flex-col items-center justify-center gap-2 ">
      <div className="flex w-[80rem] items-center justify-center gap-8 px-4 text-3xl font-bold">
        <h2>NEWS</h2>
      </div>
      <div className="my- flex w-[80rem] items-center justify-between px-4">
        <ul className="flex items-start gap-2 text-left text-xl font-semibold">
          <li>전체</li>
          <li>프로젝트</li>
          <li>자격증</li>
          <li>코딩테스트</li>
        </ul>
        <Button color="bg-black">글 작성</Button>
      </div>
      <ul className="w-[80rem] items-start justify-start text-start ">
        {filterData.map((el) => (
          <Link to={el.content}>
            <li className="flex flex-col gap-4 border-b-2 border-stone-200 py-8">
              <div className="flex items-center gap-2 text-xl font-semibold">
                {<IoMdMail className="text-violet-700" /> || <IoMdMailOpen />}
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
