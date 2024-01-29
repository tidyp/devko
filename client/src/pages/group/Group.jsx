import React from "react";
import { Link } from "react-router-dom";

const Group = ({ postid, title, cate, curUser, maxUser, content, tools }) => {
  return (
    <Link to={`detail/${postid}`}>
      <div className="m-2">
        <div className="flex flex-col gap-8 h-[20rem] overflow-hidden rounded-xl bg-slate-50 p-8 text-left text-base ">
          <header>
            <div>
              <span className="rounded-xl bg-rose-200 px-4">{cate}</span>
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
