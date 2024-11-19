import React from "react";
import { MdNavigateNext } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-white lg:mt-[180px] mt-[50px]">
        <div className="flex flex-col justify-center align-center text-center items-center">
          <h1 className="lg:max-w-[1000px] lg:px-[20px] lg:text-[50px] text-[32px]  font-bold  leading-full max-leading-[30px] max-w-[700px] w-full px-[30px]">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="my-4 lg:text-[22px] leading-full max-leading-[30px] max-w-[700px] w-full px-[50px]">
            Watch anywhere. Cancel anytime.
          </p>
          <p className=" lg:text-[22px] lg:max-w-[800px] leading leading-full max-leading-[30px] max-w-[700px] w-full px-[50px]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="flex flex-col mt-5 max-w-[700px]  sm:flex-row px-[50px] w-full  items-center">
          <input
            type="text"
            placeholder="Email address"
            className=" w-[100%] h-[55px] rounded-sm text-white border-[1px] pl-3 border-[#767676]"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          />

          <button className="flex my-6 justify-center  items-center  bg-[#E50914] mx-2 text-white font-semibold text-[22px] sm:w-[400px] w-[180px] h-[50px] rounded-[5px]">
            Get Started <MdNavigateNext className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
