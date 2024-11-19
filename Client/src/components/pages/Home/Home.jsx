import React from "react";
import Wallpaper from "../../images/Wallpaper.jpg";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div style={{ position: "absolute", zIndex: 1 }}>
          <NavBar />
          <Hero />
        </div>
        <div className="w-screen">
          <img
            src={Wallpaper}
            alt=""
            style={{
              position: "relative",
              opacity: 0.3,
            }}
            className="object-cover h-[480px] w-full lg:h-[700px]"
          />
        </div>
      </div>
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
