
const Pricing = () => {
  return (
    <>
      <div className="bg-white flex flex-col border pb-0 border-b-0 justify-center items-center " id="price">
      <div className="xl:w-[7%] xl:mt-28 mt-14 mb-5 bg-white rounded-lg flex text-md font-sans  shadow-md">
        <span>💲</span><p className="ml-2 text-[#8247ff] font-semibold ">Pricing</p>
      </div>
      <div className=" text-center xl:w-2/3 w-[90%] mt-26">
        <h1 className=" text-center text-6xl  font-semibold font-sans">Select your ideal <span className="text-[#fe8162]">Pricing</span> plan</h1>
        <p className="my-5 w-2/3 mx-auto text-center font-semibold text-xl text-gray-600">At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.</p>
      </div>
      <div className="flex xl:flex-row flex-col gap-5">
        <div className="bg-[#ededfa] p-5 rounded-xl w-80">
          <p className="bg-white text-[#fe8162] px-2 w-2/5 rounded-lg text-center font-semibold my-4">FREE</p>
          <p className="font-bold my-4"><span className="text-6xl">$O</span>/month</p> 
          <ul className="text-lg text-gray-500 my-7 list-disc px-3">
            <li className="my-2">Access to all basic features</li>
            <li className="my-2">Reporting and analytics</li>
            <li className="my-2">Up to 5 individual users</li>
            <li className="my-2">Chat and email support</li>
          </ul>
          <button className="bg-white text-black rounded-lg px-4 py-2 mt-10">Get Started</button>
        </div>
        <div className="bg-[#1c1c1c] p-5 rounded-xl w-80">
          <p className="bg-white text-[#fe8162] px-2 w-2/5 rounded-lg text-center font-semibold my-4">STANDARD</p>
          <p className="font-bold my-4 text-white"><span className="text-6xl ">$25</span>/month</p> 
          <ul className="text-lg text-gray-400 my-7 list-disc px-3">
            <li className="my-2">Access to all basic features</li>
            <li className="my-2">Reporting and analytics</li>
            <li className="my-2">Up to 5 individual users</li>
            <li className="my-2">Chat and email support</li>
            <li className="my-2">3+ integration</li>
            <li className="my-2">Account performance reporting</li>
          </ul>
          <button className="bg-[#8247ff] text-white rounded-lg px-4 py-2 mt-10">Get Started</button>
        </div>
        <div className="bg-[#ededfa] p-5 rounded-xl w-80">
          <p className="bg-white text-[#fe8162] px-2 w-2/5 rounded-lg text-center font-semibold my-4">BUSINESS</p>
          <p className="font-bold my-4"><span className="text-6xl">$45</span>/month</p> 
          <ul className="text-lg text-gray-500 my-7 list-disc px-3">
            <li className="my-2">Access to all basic features</li>
            <li className="my-2">Reporting and analytics</li>
            <li className="my-2">Up to 5 individual users</li>
            <li className="my-2">Chat and email support</li>
            <li className="my-2">3+ integration</li>
          </ul>
          <button className="bg-white text-black rounded-lg px-4 py-2 mt-2">Get Started</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Pricing