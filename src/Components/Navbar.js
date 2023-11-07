import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <TbTruckDelivery size={25} className="mr-4" />, text: "Home" },
    { icon: <HiBuildingOffice2 size={25} className="mr-4" />, text: "About" },
    { icon: <MdFavorite size={25} className="mr-4" />, text: "Projects" },
    { icon: <MdHelp size={25} className="mr-4" />, text: "Contact" },
  ];

  return (
    <div className=" bg-white top-0 left-0 w-full mx-auto  justify-center items-center p-4 z-20 shadow-lg sticky">
      
      <div className=" flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer ">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 ">
          Demo.<span className="font-bold">Sidebar</span>
        </h1>
      </div>
      
      {nav ? (
        <div className=" bg-black/30 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

     
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 shadow-xl shadow-black duration-500"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white shadow-xl shadow-black z-10 duration-500"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer hover:text-red-700 hover:rotate-12 duration-300"
        />
        <h2 className="text-2xl p-4">
          Demo<span className="font-bold">Sidebar</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {menuItems.map(({ icon, text }, index) => {
              return (
                <div key={index} className=" py-4">
                  <li className="text-xl flex cursor-pointer  w-[60%] rounded-full  p-2 hover:text-white duration-300 hover:bg-black  ">
                    {icon} {text}
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;