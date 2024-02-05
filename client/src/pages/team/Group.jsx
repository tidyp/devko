import React from "react";
import { Link } from "react-router-dom";

const Group = ({ postId, title, category, curUser, maxUser, content, tools }) => {
  console.log(postId, title, category, curUser, maxUser, content, tools)
  return (
    <Link to={`/${category}/detail/${postId}`}>
      <div className="m-2">
        <div className="flex flex-col gap-8 h-[20rem] overflow-hidden rounded-xl bg-neutral-50 p-8 text-left text-base ">
          <header>
            <div>
              <span className="rounded-xl bg-rose-200 px-4">{category}</span>
              <div>{title}</div>
            </div>
            <div>
              <span>
                {curUser}/{maxUser}
              </span>
            </div>
          </header>
          <bodt>{content}</bodt>
          <footer>{tools}</footer>
        </div>
      </div>
    </Link>
  );
};

export default Group;