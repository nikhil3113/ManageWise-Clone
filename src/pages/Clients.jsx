import happy from '../assets/users.png'
const Clients = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center mt-32'>
    <div className="flex xl:flex-row flex-col shadow-lg xl:w-[80%]">
      <div className="bg-white flex flex-col justify-center items-center ">
        <div className="xl:w-[70%] xl:mt-28 mt-14 mb-5 bg-white rounded-lg flex text-md font-sans ">
          <span>👋</span>
          <p className="ml-2 text-[#8247ff] font-semibold ">
            Don&apos;t miss out
          </p>
        </div>
        <div className=" text-center xl:w-2/3 w-[90%] mt-26">
          <h1 className=" xl:text-left text-center  text-5xl  font-bold font-sans">
          Unleash your <span className="text-[#fe8162]">Potential</span> with us 
          </h1>
          <p className="my-5 xl:w-[80%] xl:text-left text-center font-semibold text-xl text-gray-600">
          Join our community of ambitious individuals and organizations eager to make a difference.
          </p>
        </div>
        <button className="bg-[#8247ff] text-white rounded-lg px-4 py-2 mt-10 text-xl mb-9">Get Started</button>
      </div>

      <div className="flex flex-col justify-center items-center xl:w-2/5 mt-7">
        <div className="shadow-xl px-5 py-3 rounded-2xl">
          <p className="text-2xl font-semibold "><span className="text-[#8247ff]">200+</span> Happy users</p>
        </div>
        <div>
          <img src={happy} alt="" />
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Clients