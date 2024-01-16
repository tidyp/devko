const PopTag = ({ tag, count }) => {
  return (
    <>
      <div className="flex flex-col items-start justify-start gap-2.5">
        {/* DOTO: Tag 컴포넌트 */}
        <div className="inline-flex items-center justify-start gap-2 text-xl font-semibold">
          {`# ${tag}`}
        </div>
        <div className="inline-flex items-center justify-start gap-2">
        {`${count.toLocaleString()} posted`}
        </div>
      </div>
    </>
  );
};

export default PopTag;
