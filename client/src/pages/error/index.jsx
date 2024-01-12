import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-[#00192c] pt-8 text-xl text-white">
      <h2 className="text-rose-600">존재하지 않는 페이지입니다.</h2>
      <Link className="text-sm text-blue-500" to="/">홈으로 돌아가기</Link>
      <img
        className="h-lvh"
        src="https://th.bing.com/th/id/OIG.4qZm6RxvRs2SfsDkJqPm?pid=ImgGn"
        alt="error"
      />
    </div>
  );
};

export default index;
