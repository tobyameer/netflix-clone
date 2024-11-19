import React from "react";
import Pic1 from "../../images/tv.png";
import Pic2 from "../../images/mobile-0819.jpg";
import Pic3 from "../../images/device-pile.png";
import Pic4 from "../../images/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png";
import Questions from "./Questions";

const Body = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="flex flex-col text-center">
        <div
          style={{ content: "" }}
          className="w-[screen] h-[7px] bg-[#1F1F1F]"
        />
        <div className="mt-[50px] lg:mx-[30px] lg:font-bold mb-[100px] flex flex-col lg:text-left lg:flex-row items-center">
          <div className="xl:mx-[100px]">
            <h1 className="text-[32px] lg:text-[50px] font-bold">
              Enjoy on your TV
            </h1>
            <p className="mt-[15px] lg:text-[22px] mx-[30px] lg:mx-0 text-[17px]">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="lg:w-full">
            <img src={Pic1} alt="pic1" />
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex flex-col text-center">
        <div
          style={{ content: "" }}
          className="w-[screen] h-[7px] bg-[#1F1F1F]"
        />
        <div className="mt-[50px] lg:mx-[30px] lg:font-bold mb-[100px] flex flex-col lg:text-left lg:flex-row-reverse items-center">
          <div className="xl:mx-[100px]">
            <h1 className="text-[32px] lg:text-[50px] font-bold">
              Download your shows to watch offline
            </h1>
            <p className="mt-[15px] lg:text-[22px] mx-[30px] lg:mx-0 text-[17px]">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
          <div className="mt-[20px]">
            <img src={Pic2} alt="pic2" />
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="flex flex-col text-center">
        <div
          style={{ content: "" }}
          className="w-[screen] h-[7px] bg-[#1F1F1F]"
        />
        <div className="mt-[50px] lg:mx-[30px] lg:font-bold mb-[100px] flex flex-col lg:text-left lg:flex-row items-center">
          <div className="xl:mx-[100px]">
            <h1 className="text-[32px] lg:text-[50px] font-bold">
              Watch everywhere
            </h1>
            <p className="mt-[15px] lg:text-[22px] mx-[30px] lg:mx-0 text-[17px]">
              Stream unlimited moives and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="mt-[30px]">
            <img src={Pic3} alt="pic3" />
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className="flex flex-col text-center">
        <div
          style={{ content: "" }}
          className="w-[screen] h-[7px] bg-[#1F1F1F]"
        />
        <div className="mt-[50px] lg:mx-[30px] lg:font-bold mb-[100px] flex flex-col lg:text-left lg:flex-row-reverse items-center">
          <div className="xl:mx-[100px]">
            <h1 className="text-[32px] lg:text-[50px] font-bold">
              Create profiles for kids
            </h1>
            <p className="mt-[15px] lg:text-[22px] mx-[30px] lg:mx-0 text-[17px]">
              Send kids on a adventures with their favorite characters in a
              space made just for them-free with your membership.
            </p>
          </div>
          <div className="mt-[30px]">
            <img src={Pic4} alt="pic4" />
          </div>
        </div>
      </div>
      {/* Questions */}
      <div className="flex flex-col text-center">
        <div
          style={{ content: "" }}
          className="w-[screen] h-[7px] bg-[#1F1F1F]"
        />
        <div className="my-[50px]">
          <Questions />
        </div>
      </div>
      <div
        style={{ content: "" }}
        className="w-[screen] h-[7px] bg-[#1F1F1F]"
      />
    </div>
  );
};

export default Body;
