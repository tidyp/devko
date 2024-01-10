const Filter = ({ children }) => {
  return (
    <div className="inline-flex w-44 items-center justify-start gap-2">
      <div className="h-4 w-4 rounded-full border border-blue-200 bg-blue-600" />
      <div className="text-sm font-normal text-blue-600">{children}</div>
    </div>
  );
};

const FilterBox = () => {
  return (
    <div className="box-border flex h-auto w-auto flex-col items-center justify-center    gap-3.5  rounded-2xl    bg-white p-8 ">
      <div className=" text-base font-semibold text-black">filter</div>
      <div className="flex h-auto flex-col items-start justify-start gap-5 self-stretch px-2.5">
        <div className="flex flex-col items-start justify-start gap-2.5">
          <Filter>날짜순</Filter>
          <Filter>인기도순</Filter>
          <Filter>키워드</Filter>
          <input className="rounded-md bg-slate-100" type="text" />
          <Filter>태그</Filter>
          <input className="rounded-md bg-slate-100" type="text" />
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
