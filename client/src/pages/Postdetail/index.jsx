import styles from "./Postdetail.module.scss";

import postsData from "../../data/posts.json";

import { useNavigate } from "react-router-dom";

const data = postsData.posts[0];
console.log(data);

const Postdetail = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[80rem]">
          <button onClick={() => navigate(-1)}>&larr; 돌아가기</button>
          <div>{data.cate}</div>
          <div>{data.Title}</div>
          <div>{data.Content}</div>
          <div>{data.WriteDate}</div>
          <div>{data.UpdateDate}</div>
          <img src={data.profileImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Postdetail;
