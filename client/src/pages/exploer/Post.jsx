import styles from "./Post.module.scss";

import { formatDate } from "../../utils/utils";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const data = formatDate(post.WriteDate);

  return (
    <>
      <div className="m-2 flex h-fit w-fit flex-col items-start justify-start gap-5 rounded-[10px] bg-white p-5">
        <div className="font-['Poppins'] text-2xl font-semibold text-black">
          {post.Title}
        </div>
        <div className="inline-flex items-start justify-start gap-2.5 self-stretch">
          <img
            className="h-12 rounded-lg"
            src={post.profileImage}
            alt={post.profileImage}
          />
          <div className="inline-flex h-14 shrink grow basis-0 flex-col items-start justify-center">
            <div className="font-['Poppins'] text-sm font-normal text-zinc-500">
              {post.name}
            </div>
          </div>
          <div className="flex items-center justify-end gap-2.5">
            <div className="font-['Poppins'] text-lg font-normal text-zinc-500">
              {data}
            </div>
          </div>
        </div>
        <div className="self-stretch font-['Poppins'] text-base font-medium text-zinc-500">
          {post.Content}
        </div>
        <div className="inline-flex items-start justify-start gap-2.5 self-stretch">
          <div>
            <span>태그1</span>
            <span>태그2</span>
            <span>태그3</span>
          </div>
          <div>
            <span>조회수</span>
            <span>좋아요</span>
            <span>댓글</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
