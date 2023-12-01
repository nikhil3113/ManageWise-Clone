import { useState } from "react"
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      

      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#fcf2ed]  shadow-sm">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link className="text-black font-bold text-3xl">
              <img src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png" className="w-2/5" alt="" />
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            {navbarOpen ? <IoMdClose /> : <FaBars/>}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col marker:text-slate-500 lg:flex-row lg:ml-auto text-black list-disc ">
              <li className="nav-item xl:mr-4">
                <ScrollLink
                  className="px-3 py-2 flex items-center text-lg  leading-snug  hover:opacity-75 cursor-pointer"
                  to="product"  
                   spy={true}
                   smooth={true}
                   duration={500}
                >
                  Features
                </ScrollLink>
              </li>
              <li className="nav-item xl:mx-4">
              <ScrollLink
               to="faq"  
               spy={true}
               smooth={true}
               duration={500}
                  className="px-3 py-2 flex items-center text-lg  leading-snug  hover:opacity-75 cursor-pointer"
                >
                  FAQ
                </ScrollLink>
              </li>
              <li className="nav-item xl:mx-4">
              <ScrollLink
                   to="price"  
                   spy={true}
                   smooth={true}
                   duration={500}
                   className="px-3 py-2 flex items-center text-lg leading-snug hover:opacity-75 cursor-pointer"
                 
                >
                  Pricing
                </ScrollLink>
              </li>
                <Link className="xl:mx-4">
                  <button className="text-xl bg-white py-2 rounded-lg px-2 font-semibold">
                    Buy Template
                  </button>
                </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}

export default NavBar