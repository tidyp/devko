import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <h2 className="text-rose-600">Page not found. :(</h2>
      <div>
        <p>페이지를 찾을 수 없습니다.</p>
        <p>해당 페이지에 대한 접근권한이 없거나,</p>
        <p>페이지가 존재하지 않습니다.</p>
        <p>URL 주소를 다시 한번 확인해주세요.</p>
      </div>
      <Link className="text-sm text-blue-500" to="/">
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFoundPage;
