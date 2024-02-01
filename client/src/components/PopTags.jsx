import { useEffect, useState } from "react";

import PopTag from "./PopTag";
import LoadingSpinner from "./LoadingSpinner";

//

const PopTags = ({ popTag }) => {
  console.log(popTag);

  return (
    <div className="box-border flex h-auto w-64 flex-col items-center justify-center gap-3.5 rounded-2xl bg-neutral-50 p-8">
      <div className=" text-base font-semibold text-black">Popular Tags</div>
      <LoadingSpinner />
      <div className="flex h-auto flex-col items-start justify-start gap-5 px-2.5">
        {popTag.map((el) => (
          <PopTag key={el.name} {...el} />
        ))}
      </div>
    </div>
  );
};

export default PopTags;
