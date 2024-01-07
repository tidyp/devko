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
        {tabs[activeTabIndex] === "Tab 1" && <p>Content for Tab 1</p>}
        {tabs[activeTabIndex] === "Tab 2" && <p>Content for Tab 2</p>}
        {tabs[activeTabIndex] === "Tab 3" && <p>Content for Tab 3</p>}
        {tabs[activeTabIndex] === "Tab 4" && <p>Content for Tab 4</p>}
      </div>
    </div>
  );
};

export default UserTab;
