import React, { useState } from "react";
import Logo from "../../images/Logo.png";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavHomeMovie = () => {
  const [scroll, setScroll] = useState(false);
  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div
      className={
        scroll === false
          ? "px-7 fixed z-[99] w-[100%] top-0 "
          : "bg-black px-7 fixed z-[99] w-[100%] top-0 "
      }
    >
      <div className=" h-[45px] flex justify-between align-center items-center">
        <div className="flex justify-evenly">
          <Link to={"/home"}>
            <img src={Logo} alt="logo" className="w-[70px] " />
          </Link>
          <ul className="ml-3 flex align-center items-center text-[8px] gap-4">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Series">
              <li>Series</li>
            </Link>
            <Link to="/Movies">
              <li>Movies</li>
            </Link>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="flex justify-right align-center items-center gap-4">
          <FaSearch size={20} />
          <FaRegBell size={20} />
          <div className="bg-blue-500 w-[30px] h-[30px] rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default NavHomeMovie;
