const ErrorServer = () => {
  return (
    <div className="flex w-full justify-center">
      <p className="flex flex-col items-center justify-center rounded-xl bg-[#f4f9f0] px-60 py-20 text-3xl text-[#125320]">
        <span>서버에 연결되어있지 않습니다.</span>
        <img
          className="w-70"
          src="https://th.bing.com/th/id/OIG.rFKul5aqYQ.teJasvbNG?pid=ImgGn"
          alt=""
        ></img>
      </p>
    </div>
  );
};

export default ErrorServer;
