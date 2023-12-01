import { CiMobile3 } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Explore = () => {
  return (
    <>
      <div className="bg-[#1c1c1c] flex flex-col  justify-center items-center mt-10 w-full">
        <div className="xl:w-[10%] xl:px-3 xl:mt-10 mt-14 mb-5 bg-white rounded-lg flex text-md font-sans">
          <span>😍</span>
          <p className="ml-2 text-[#8247ff] font-semibold ">AND MORE!</p>
        </div>
        <div className=" text-left  w-[90%] mt-26">
          <h1 className=" text-center text-5xl font-bold font-sans text-white">
            Explore an array of features that elevate your <br />
            <span className="text-[#fe8162]">Productivity</span> to new heights
          </h1>
          <p className="my-5 w-2/3 mx-auto text-center font-semibold text-xl text-gray-600">
            Discover the tools that will revolutionize the way you manage and
            optimize your operations
          </p>
        </div>
        <div className="mb-10 px-5 xl:p-0 flex xl:flex-row flex-col gap-10">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-center items-center text-center xl:w-[30%] py-5">
            <p className="text-red text-6xl">
              <CiMobile3 />
            </p>
            <div className="p-5">
              <h2 className="text-2xl font-bold">
                Cross-Platform Compatibility
              </h2>
              <p className="mb-3 font-normal text-gray-700 ">
                Enjoy the flexibility of cross-platform compatibility. Our
                product works seamlessly across desktop, web, and mobile
                devices, allowing you to work from your preferred device..
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-center items-center text-center xl:w-[30%] ">
            <p className="text-red text-6xl">
              <CiBellOn />
            </p>
            <div className="p-5">
              <h2 className="text-2xl font-bold">
                Cross-Platform Compatibility
              </h2>
              <p className="mb-3 font-normal text-gray-700 ">
                Enjoy the flexibility of cross-platform compatibility. Our
                product works seamlessly across desktop, web, and mobile
                devices, allowing you to work from your preferred device..
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-center items-center text-center xl:w-[30%]">
            <p className="text-red text-6xl">
              <AiOutlineFire />
            </p>
            <div className="p-5">
              <h2 className="text-2xl font-bold">
                Cross-Platform Compatibility
              </h2>
              <p className="mb-3 font-normal text-gray-700 ">
                Enjoy the flexibility of cross-platform compatibility. Our
                product works seamlessly across desktop, web, and mobile
                devices, allowing you to work from your preferred device..
              </p>
            </div>
          </div>
        </div>

        <div className="xl:w-[10%] xl:px-3 xl:mt-10 mt-14 mb-5 bg-white rounded-lg flex text-md font-sans">
          <span>😍</span>
          <p className="ml-2 text-[#8247ff] font-semibold ">Integration!</p>
        </div>
        <div className=" text-left  xl:w-[30%] w-full mt-26  mb-10">
          <h1 className=" text-center text-5xl font-bold font-sans text-white">
            Enable <span className="text-[#fe8162]">integration</span> with other
            popular tools and platforms
          </h1>
          <p className="my-5 w-2/3 mx-auto text-center font-semibold text-xl text-gray-600">
            Discover the tools that will revolutionize the way you manage and
            optimize your operations
          </p>
        </div>
      </div>
    </>
  );
};

export default Explore;
