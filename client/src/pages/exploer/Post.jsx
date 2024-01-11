import styles from "./Post.module.scss";

import { formatDate } from "../../utils/utils";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const data = formatDate(post.WriteDate)
  return (
    <>
      <div className="m-2 flex h-fit w-fit flex-col items-start justify-start gap-5 rounded-[10px] bg-white p-8 w-full">
        <div className="flex items-center justify-center gap-2.5 self-stretch">
          <Link to={`/userinfo`}>
            <img
              className="h-12 rounded-lg"
              src={post.profileImage}
              alt={post.profileImage}
            />
          </Link>
          <div className="flex h-14 shrink grow basis-0 flex-col items-start justify-center">
            <div className="text-2xl font-semibold text-black">
              {post.title}
            </div>
            <div className="flex items-center justify-end gap-2.5">
              <div className="text-sm font-semibold text-blue-700">
                {post.name}
              </div>
              <div className="text-sm font-semibold text-zinc-500">{data}</div>
            </div>
          </div>
        </div>
        <Link to={`/discuss/${post.id}`}>
          <div className="self-stretch  text-base font-medium text-zinc-500">
            {post.content}
          </div>
        </Link>
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
