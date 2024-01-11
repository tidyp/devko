const PopTags = () => {
  return (
    <div className="box-border flex h-auto w-64 flex-col items-center justify-center    gap-3.5  rounded-2xl  bg-white p-8 ">
      <div className=" text-base font-semibold text-black">Popular Tags</div>
      <div className="flex h-auto flex-col items-start justify-start gap-5 self-stretch px-2.5">
        <div className="flex flex-col items-start justify-start gap-2.5">
          <div className="inline-flex items-center justify-start gap-2">
            #design
          </div>
          <div className="inline-flex items-center justify-start gap-2">
            98,323 posted
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2.5">
          <div className="inline-flex items-center justify-start gap-2">
            #design
          </div>
          <div className="inline-flex items-center justify-start gap-2">
            98,323 posted
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2.5">
          <div className="inline-flex items-center justify-start gap-2">
            #design
          </div>
          <div className="inline-flex items-center justify-start gap-2">
            98,323 posted
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopTags;
