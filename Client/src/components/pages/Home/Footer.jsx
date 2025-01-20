import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="mx-[30px] my-[80px]">
      {/* <ol className="flex text-[#9D9D9D] mt-[40px] ">Questions? Contact us.</ol> */}
      <div className="flex my-[20px]">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2  w-full text-[#9D9D9D]">
          <ol>FAQ</ol>
          <ol>Account</ol>
          <ol>Investor Relations</ol>
          <ol>Ways to watch</ol>
          <ol>Privacy</ol>
          <ol>Corporate Information</ol>
          <ol>Speed Test</ol>
          <ol>Only on Netflix</ol>
          <ol>Help Center</ol>
          <ol>Media Center</ol>
          <ol>Jobs</ol>
          <ol>Terms of Use</ol>
          <ol>Cookie Preference</ol>
          <ol>Contact Us</ol>
          <ol>Legal Notices</ol>
        </ul>
      </div>
      <div>
        <button className=" text-white flex justify-evenly items-center border-[1px] border-[#767676]  rounded-[5px] w-[120px] h-[33px]">
          <IoLanguage className="text-white" />
          English
          <FaAngleDown />
        </button>
        <p className="my-[15px] text-[14px] text-[#9D9D9D]">Netflix Egypt</p>
      </div>
    </div>
  );
};

export default Footer;
