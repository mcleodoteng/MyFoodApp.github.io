import { useState } from "react";
import { FaBars, FaHamburger, FaTimes } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";
import { FaWallet } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    // "w-full h-[80px] border-b-[1px] border-solid fixed z-10 border-black"
    <div
      className={
        color
          ? "bg-black w-full h-[80px] border-b-[1px] border-solid fixed z-10 border-black -300 text-[#e5b528]"
          : " bg-[#e5b528] w-full h-[80px] border-b-[1px] border-solid fixed z-10 border-black"
      }
    >
      <div className="flex justify-between items-center w-full h-full p-4 ">
        <div className="cursor-pointer">
          <FaHamburger
            size={40}
            className="ml-2 hover:scale-125 duration-300"
          />
        </div>
        <ul className="hidden md:flex p-4 font-sans text-transform: uppercase gap-6 text-xl cursor-pointer">
          <li className="hover:scale-125 duration-300">Home</li>
          <li className="hover:scale-125 duration-300">Order</li>
          <li className="hover:scale-125 duration-300">Menu</li>
          <li className="hover:scale-125 duration-300">Delivery</li>
          <li className="hover:scale-125 duration-300">Contact</li>
        </ul>
        <div>
          <div onClick={() => setNav(!nav)} className={nav ? "text-black" : ""}>
            <FaBars
              size={25}
              className="z-10 cursor-pointer hover:scale-125 duration-300"
            />
          </div>
          <div
            className={
              nav
                ? "duration-300 bg-black/80 fixed w-full h-screen top-0 right-0 z-10"
                : "fixed top-0 h-screen bg-black/80 z-10 right-[-100%] w-[100%] duration-300"
            }
          >
            <FaTimes
              onClick={() => setNav(!nav)}
              size={25}
              className="text-white float-right mt-5 mr-5 cursor-pointer"
            />
            <nav>
              <ul className="flex flex-col p-4 text-white items-center mt-20 cursor-pointer">
                <li className="text-xl py-4 flex hover:scale-125 duration-300">
                  <AiOutlineHome size={30} className="mr-4" /> Home
                </li>
                <li className="text-xl py-4 flex hover:scale-125 duration-300">
                  <FaWallet size={30} className="mr-4" /> Order
                </li>
                <li className="text-xl py-4 flex hover:scale-125 duration-300">
                  <FaHamburger size={30} className="mr-4" /> Menu
                </li>
                <li className="text-xl py-4 flex hover:scale-125 duration-300">
                  <TbTruckDelivery size={30} className="mr-4" /> Delivery
                </li>
                <li className="text-xl py-4 flex hover:scale-125 duration-300">
                  <MdContactPhone size={30} className="mr-4" /> Contact
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
