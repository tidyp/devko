import FilterBox from "../../components/FilterBox";
import PopTags from "../../components/PopTags";
import TopWriters from "../../components/TopWriters";

const SideBar = () => {
  return (
    <>
      <aside className="flex flex-col gap-2">
        <FilterBox />
        <PopTags />
        <TopWriters />
      </aside>
    </>
  );
};

export default SideBar;
