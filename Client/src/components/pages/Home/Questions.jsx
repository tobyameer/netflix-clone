import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Questions = () => {
  const [click, setClicked] = useState(0);
  const handleClick = (e) => {
    if (click === e) {
      setClicked(0);
    } else {
      setClicked(e);
    }
  };

  return (
    <div>
      <h1 className="text-[32px] font-bold lg:text-[50px]">
        Frequently Asked Questions
      </h1>
      {/* Question */}
      <div>
        {/* Question 1 */}
        <div className="mx-8 my-[10px] ">
          <button
            onClick={() => handleClick(1)}
            className="w-full lg:text-[20px]  hover:bg-[#404040] flex justify-between px-6 bg-[#2E2E2E] font-medium lg:h-[100px]   h-[80px] items-center"
          >
            What is Netflix?
            {click !== 1 ? (
              <IoMdAdd size={30} className="text-white lg:size-[40px]" />
            ) : (
              <RxCross2 size={30} className="text-white lg:size-[40px]" />
            )}
          </button>
          <div>
            <p
              className={
                click !== 1
                  ? "hidden "
                  : " lg:text-[20px] mt-[1px] bg-[#2E2E2E] px-[30px] py-[25px] text-left font-medium"
              }
            >
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
              <br />
              <br /> You can watch as much as you want, whenever you want
              without a single commercial – all for one low monthly price.
              There's always something new to discover and new TV shows and
              movies are added every week!
            </p>
          </div>
        </div>
        {/* Question 2 */}
        <div className="mx-8 my-[10px] ">
          <button
            onClick={() => handleClick(2)}
            className="lg:h-[100px]  w-full lg:text-[20px]  hover:bg-[#404040] flex justify-between px-6 bg-[#2E2E2E] font-medium   h-[80px] items-center"
          >
            How much does Netflix cost?
            {click !== 2 ? (
              <IoMdAdd size={30} className="text-white lg:size-[40px]" />
            ) : (
              <RxCross2 size={30} className="text-white lg:size-[40px]" />
            )}
          </button>
          <div>
            <p
              className={
                click !== 2
                  ? "hidden"
                  : "lg:text-[20px]  mt-[1px] bg-[#2E2E2E] px-[30px] py-[25px] text-left font-medium"
              }
            >
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              EGP 70 to EGP 165 a month. No extra costs, no contracts.
            </p>
          </div>
        </div>
        {/* Question 3 */}
        <div className="mx-8 my-[10px] ">
          <button
            onClick={() => handleClick(3)}
            className="lg:h-[100px]  w-full lg:text-[20px]  hover:bg-[#404040] flex justify-between px-6 bg-[#2E2E2E] font-medium   h-[80px] items-center"
          >
            Where can I watch?{" "}
            {click !== 3 ? (
              <IoMdAdd size={30} className="text-white lg:size-[40px]" />
            ) : (
              <RxCross2 size={30} className="text-white lg:size-[40px]" />
            )}
          </button>
          <div>
            <p
              className={
                click !== 3
                  ? "hidden"
                  : "lg:text-[20px]  mt-[1px] bg-[#2E2E2E] px-[30px] py-[25px] text-left font-medium"
              }
            >
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
              <br />
              <br /> You can also download your favorite shows with the iOS or
              Android app. Use downloads to watch while you're on the go and
              without an internet connection. Take Netflix with you anywhere.
            </p>
          </div>
        </div>
        {/* Question 4 */}

        <div className="mx-8 my-[10px] ">
          <button
            onClick={() => handleClick(4)}
            className="lg:h-[100px]  w-full lg:text-[20px]  hover:bg-[#404040] flex justify-between px-6 bg-[#2E2E2E] font-medium   h-[80px] items-center"
          >
            How do I cancel?{" "}
            {click !== 4 ? (
              <IoMdAdd size={30} className="text-white lg:size-[40px]" />
            ) : (
              <RxCross2 size={30} className="text-white lg:size-[40px]" />
            )}
          </button>
          <div>
            <p
              className={
                click !== 4
                  ? "hidden"
                  : "lg:text-[20px]  mt-[1px] bg-[#2E2E2E] px-[30px] py-[25px] text-left font-medium"
              }
            >
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </p>
          </div>
        </div>
        {/* Question 5 */}

        <div className="mx-8 my-[10px] ">
          <button
            onClick={() => handleClick(5)}
            className="lg:h-[100px]  w-full lg:text-[20px]  hover:bg-[#404040] flex justify-between px-6 bg-[#2E2E2E] font-medium   h-[80px] items-center"
          >
            What can I watch on Netflix?
            {click !== 5 ? (
              <IoMdAdd size={30} className="text-white lg:size-[40px]" />
            ) : (
              <RxCross2 size={30} className="text-white lg:size-[40px]" />
            )}
          </button>
          <div>
            <p
              className={
                click !== 5
                  ? "hidden"
                  : "lg:text-[20px]  mt-[1px] bg-[#2E2E2E] px-[30px] py-[25px] text-left font-medium"
              }
            >
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </div>
        </div>
        {/* Question 6 */}
        <div className="mx-8 my-[10px] ">
          <button
            onClick={() => handleClick(6)}
            className="lg:h-[100px]  w-full lg:text-[20px]  hover:bg-[#404040] flex justify-between px-6 bg-[#2E2E2E] font-medium   h-[80px] items-center"
          >
            Is Netflix good for kids?
            {click !== 1 ? (
              <IoMdAdd size={30} className="text-white lg:size-[40px]" />
            ) : (
              <RxCross2 size={30} className="text-white lg:size-[40px]" />
            )}
          </button>
          <div>
            <p
              className={
                click !== 6
                  ? "hidden"
                  : "lg:text-[20px]  mt-[1px] bg-[#2E2E2E] px-[30px] py-[25px] text-left font-medium"
              }
            >
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space.
              <br />
              <br /> Kids profiles come with PIN-protected parental controls
              that let you restrict the maturity rating of content kids can
              watch and block specific titles you don’t want kids to see.
            </p>
          </div>
        </div>
      </div>
      {/* Input */}
      <div>
        <div className="flex flex-col items-center text-white mt-[60px]">
          <div className="flex flex-col justify-center align-center items-center">
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
    </div>
  );
};

export default Questions;
