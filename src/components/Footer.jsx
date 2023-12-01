import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#fcf2ed] flex  flex-col justify-around ">
        <div className="mt-32 flex xl:flex-row flex-row justify-around mb-10 border border-b-2 border-t-0">
          <div className="text-3xl font-bold flex flex-row gap-5">
          <img src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png" className="w-[15%] h-2/5" alt="" />
            <p>ManageWise</p>
          </div>
          <div>
            <ul className="text-lg">
              <li className="my-2">Features</li>
              <li className="my-2"> FAQ </li>
              <li className="my-2"> Pricing </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-around items-center mb-7">
          <div>
            <p className="font-semibold text-lg">© 2022 ManageWise, Inc.</p>
          </div>
          <div>
            <ul className="flex justify-around gap-5">
              <li className="text-2xl">
                <FaInstagramSquare />
              </li>
              <li className="text-2xl">
                <FaSquareXTwitter />
              </li>
              <li className="text-2xl">
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
