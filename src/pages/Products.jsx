const Products = () => {
  return (
    <>
      <div className="bg-[#00000] flex flex-col border border-b-0 justify-center items-center mb-10 " id="product">
        <div className="xl:w-[12%] xl:mt-28 mt-14 mb-5 bg-white rounded-lg flex text-md font-sans shadow-md">
          <span>🔥</span>
          <p className="ml-2 text-[#8247ff] font-semibold ">Premium Feature!</p>
        </div>
        <div className=" text-center xl:w-2/3 w-[90%] mt-26">
          <h1 className=" text-center text-5xl xl:text-6xl font-semibold font-sans">
            Discover our product&apos;s{" "}
            <span className="text-[#fe8162]">Capabilities</span>
          </h1>
          <p className="my-5 w-2/3 mx-auto text-center font-semibold text-xl text-gray-600">
            Don&apos;t settle for mediocrity - embrace the future of management
            with Manage Wise.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-24 mt-7">
          <div className="text-4xl w-[80%] xl:w-[25%] p-5 bg-[#ededfa] font-semibold rounded-xl">
            <span>⭐</span>
            <p className="mt-5">
              Boost productivity and streamline workflow with us. Enjoy our
              intuitive interface and robust features.
            </p>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <img src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024" alt="" />
            <div className="p-5">
                <h2 className="text-2xl font-bold">Smart Task Management</h2>
                <p className="mb-3 font-normal text-gray-700 ">Say goodbye to chaos with our smart task management system.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-5 mt-10">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <img src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=1024" alt="" />
            <div className="p-5">
                <h2 className="text-2xl font-bold">Flexible Scheduling</h2>
                <p className="mb-3 font-normal text-gray-700 ">Stay productive with our flexible scheduling system</p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <img src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=1024" alt="" />
            <div className="p-5">
                <h2 className="text-2xl font-bold">Easy Communication</h2>
                <p className="mb-3 font-normal text-gray-700 ">Collaborate seamlessly with your team in real-time.</p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <img src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=1024" alt="" />
            <div className="p-5">
                <h2 className="text-2xl font-bold">Analytics</h2>
                <p className="mb-3 font-normal text-gray-700 ">Gain valuable insights with our advanced analytics feature.</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default Products;
