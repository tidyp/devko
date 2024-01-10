import React from "react";

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <div>회원가입 추가정보</div>
      <div className="w-[40rem]">
        <div className="flex flex-col  gap-8">
          <input type="text" placeholder="가나다" />
          <input type="text" placeholder="123" />
          <input type="text" placeholder="abc" />
          <input type="text" placeholder="ccwqqwd" />
        </div>
        <button>Skip</button>
        <button>완료</button>
      </div>
    </div>
  );
};

export default index;
