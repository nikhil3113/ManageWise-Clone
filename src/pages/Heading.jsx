import { MdOutlineSlowMotionVideo } from "react-icons/md";

const Heading = () => {
  return (
    <>
    
    <div className="bg-[#fcf2ed] flex flex-col border pb-0 border-b-0 justify-center items-center ">
      <div className="xl:w-[17%] xl:mt-28 mt-14 mb-5 bg-white rounded-lg flex text-md font-sans">
        <span>👋</span><p className="ml-2 text-[#8247ff] font-semibold ">WELCOME TO MANAGE WISE!</p>
      </div>
      <div className=" text-center xl:w-2/3 w-[90%] mt-26">
        <h1 className=" text-center text-5xl xl:text-7xl font-bold font-sans">Empower your business with <span className="text-[#fe8162]">Strategic</span> insights</h1>
        <p className="my-5 w-2/3 mx-auto text-center font-semibold text-xl text-gray-600">Powerful management platform designed to streamline your business operations, boost productivity, and drive success</p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-5">
        <button className="bg-[#8247ff] px-12 py-3 text-white rounded-2xl text-xl font-bold ">Get Started</button>
        <button className="bg-white shadow-sm px-12 py-3 text-black rounded-2xl text-xl font-bold flex">Video Demo <MdOutlineSlowMotionVideo className="ml-2 text-3xl" /></button>
      </div>
      <div className="flex justify-center items-center relative xl:top-12">
      <div className="mb-5 mt-10 shadow-2xl rounded-lg w-[80%] xl:w-full">
        <img src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=1024" alt="image" className="" />
      </div>
      </div>
      </div>
    </>
  )
}

export default Heading