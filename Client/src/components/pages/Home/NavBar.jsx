import React from "react";
import Logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="py-[7px] px-[12px] w-screen">
      <div class="flex justify-between items-center">
        <img src={Logo} alt="pic" className="w-[110px] lg:w-[200px]" />
        <div className="flex">
          <button className=" text-white flex justify-evenly items-center border-[1px] border-[#767676]  rounded-[5px] w-[120px] h-[33px]">
            <IoLanguage className="text-white" />
            English
            <FaAngleDown />
          </button>
          <Link to={"/SignIn"}>
            <button className="bg-[#E50914] mx-2 text-white font-semibold text-[13.5px] w-[80px] h-[33px] rounded-[5px]">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
