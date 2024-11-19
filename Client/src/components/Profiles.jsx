import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Profiles = () => {
  return (
    <div className="flex justify-center bg-[#101010] h-screen">
      <div className="flex flex-col justify-center items-center">
        <p>Who's watching?</p>
        <div className="flex gap-[20px] text-center text-[13px] my-[20px] text-[#7D7D7D]">
          <Link to={"/"}>
            <div className="hover:text-gray-200">
              <div className="w-[80px] h-[80px] rounded-sm hover:border-[2px] hover:border-gray-200 bg-blue-300"></div>
              <p className="py-[5px]">User 1</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="hover:text-gray-200">
              <div className="w-[80px] h-[80px] hover:border-[2px] hover:border-gray-200 rounded-sm bg-red-300"></div>
              <p className="py-[5px]">User 2</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="hover:text-gray-200">
              <div className="w-[80px] h-[80px] rounded-sm bg-green-300 hover:border-[2px] hover:border-gray-200"></div>
              <p className="py-[5px]">User 3</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="hover:text-gray-200">
              <div className="w-[80px] h-[80px] hover:border-[2px] hover:border-gray-200 rounded-sm bg-yellow-300"></div>
              <p className="py-[5px]">User4</p>
            </div>
          </Link>

          <div className="hover:text-gray-200">
            <div className="w-[80px] h-[80px] hover:bg-gray-200 justify-center items-center flex">
              <IoMdAddCircle size={55} className="text-[#7D7D7D]" />
            </div>

            <p className="py-[5px]">Add Profile</p>
          </div>
        </div>
        <button className="mt-[20px] hover:text-gray-200 hover:border-[2px] hover:border-gray-200 px-[20px] text-[14px] text-[#7D7D7D] py-[5px] border-[1px] border-[#7D7D7D]">
          Manage Profiles
        </button>
      </div>
    </div>
  );
};

export default Profiles;
