import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="mx-[30px]">
      <u className="flex text-[#9D9D9D] mt-[40px] ">Questions? Contact us.</u>
      <div className="flex my-[20px]">
        <ul className="grid grid-cols-4 w-full text-[#9D9D9D]">
          <u>FAQ</u>
          <u>Account</u>
          <u>Investor Relations</u>
          <u>Ways to watch</u>
          <u>Privacy</u>
          <u>Corporate Information</u>
          <u>Speed Test</u>
          <u>Only on Netflix</u>
          <u>Help Center</u>
          <u>Media Center</u>
          <u>Jobs</u>
          <u>Terms of Use</u>
          <u>Cookie Preference</u>
          <u>Contact Us</u>
          <u>Legal Notices</u>
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
