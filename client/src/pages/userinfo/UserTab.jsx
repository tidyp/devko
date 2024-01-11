import React, { useState } from "react";

const UserTab = () => {
  const tabs = ["discuss", "q&a", "comment", "guitar.etc.."];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="flex w-full flex-col items-center ">
      <div className="flex w-full flex-row items-center justify-center">
        {/* <div className="flex items-center justify-center"> */}
        {tabs.map((tab, index) => (
          <div
            className={`w-full cursor-pointer p-4 text-center uppercase  ${
              index === activeTabIndex
                ? "border-b-4 border-indigo-500 text-indigo-700"
                : ""
            }`}
            key={index}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
        {/* </div> */}

        <div className="flex flex-col items-center justify-center">
          <div className="flex"></div>

          {/* Content based on the active tab */}
        </div>
      </div>
      <div>
        {tabs[activeTabIndex] === "discuss" && (
          <p className="mt-10 text-2xl">해당 유저는 작성한 글이 없어요.</p>
        )}
        {tabs[activeTabIndex] === "q&a" && (
          <p className="mt-10 text-2xl">해당 유저가 질문한 글이 없어요.</p>
        )}
        {tabs[activeTabIndex] === "comment" && (
          <p className="mt-10 text-2xl">해당 유저는 작성한 댓글이 없어요.</p>
        )}
        {tabs[activeTabIndex] === "guitar.etc.." && (
          // TODO: 유저로그, 업적달성일, 유저통계, 스터디 활동 등.
          <p className="mt-10 text-2xl">해당 유저는 활동기록이 없어요.</p>
        )}
      </div>
    </div>
  );
};

export default UserTab;
