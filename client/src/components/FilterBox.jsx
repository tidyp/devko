const FilterBox = () => {
  return (
    <div className="box-border flex h-auto w-auto flex-col items-center justify-center    gap-3.5  rounded-2xl    bg-slate-50 p-8 ">
      <div className=" text-base font-semibold text-black">filter</div>
      <div className="flex h-96 flex-col items-start justify-start gap-5 self-stretch px-2.5">
        <div className="flex flex-col items-start justify-start gap-2.5">
          <div className="inline-flex w-44 items-center justify-start gap-2">
            <div className="h-4 w-4 rounded-full border border-blue-200 bg-blue-600" />
            <div className="text-sm font-normal text-blue-600">날짜</div>
          </div>
          <div className="inline-flex w-44 items-center justify-start gap-2">
            <div className="h-4 w-4 rounded-full border border-gray-700" />
            <div className=" text-sm font-normal text-gray-700">
              Pertanyaan saya
            </div>
          </div>
          <div className="inline-flex w-44 items-center justify-start gap-2">
            <div className="h-4 w-4 rounded-full border border-gray-700" />
            <div className=" text-sm font-normal text-gray-700">
              Partisipasi saya
            </div>
          </div>
          <div className="inline-flex w-44 items-center justify-start gap-2">
            <div className="h-4 w-4 rounded-full border border-gray-700" />
            <div className=" text-sm font-normal text-gray-700">
              Jawaban saya
            </div>
          </div>
        </div>
        <div className="h-px self-stretch border border-zinc-500"></div>
        <div className="flex flex-col items-start justify-start gap-2.5">
          <div className="inline-flex w-44 items-center justify-start gap-2">
            <div className="h-4 w-4 rounded-full border border-gray-700" />
            <div className=" text-sm font-normal text-gray-700">
              Diskusi sudah selesai
            </div>
          </div>
          <div className="inline-flex w-44 items-center justify-start gap-2">
            <div className="h-4 w-4 rounded-full border border-gray-700" />
            <div className=" text-sm font-normal text-gray-700">
              Diskusi selum selesai
            </div>
          </div>
        </div>
        <div className="h-px self-stretch border border-zinc-500"></div>
        <div className="flex flex-col items-start justify-start gap-2.5">
          <div className="inline-flex w-44 items-center justify-start gap-2">
            <div className="h-4 w-4 rounded-full border border-gray-700" />
            <div className=" text-sm font-normal text-gray-700">
              Diskusi terlama
            </div>
          </div>
          <div className="inline-flex w-44 items-center justify-start gap-2">
            <div className="h-4 w-4 rounded-full border border-gray-700" />
            <div className=" text-sm font-normal text-gray-700">
              Diskusi terbaru
            </div>
          </div>
        </div>
        <div className="h-px self-stretch border border-zinc-500"></div>
        <div className="flex flex-col items-start justify-start gap-2.5">
          <div className="inline-flex w-44 items-center justify-start gap-2">
            <div className="h-4 w-4 rounded-full border border-gray-700" />
            <div className=" text-sm font-normal text-gray-700">
              Belum ada balasan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
