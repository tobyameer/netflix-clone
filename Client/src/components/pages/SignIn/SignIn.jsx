import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import Wallpaper from "../../images/Wallpaper.jpg";
import LogForm from "./LogForm";
import Footer from "../Home/Footer";
const SignIn = () => {
  return (
    <div>
      <div className="flex justify-center h-[830px] w-screen">
        <div style={{ position: "absolute", zIndex: 1 }}>
          {/* Logo */}
          <div className="w-screen py-[7px] px-[12px] flex justify-start items-center">
            <Link to={"/"}>
              <img src={Logo} className="w-[110px] lg:w-[200px]" alt="Logo" />
            </Link>
          </div>
          {/* Sign in */}
          <LogForm />
        </div>

        <img
          src={Wallpaper}
          alt=""
          style={{
            position: "relative",
            opacity: 0.3,
            objectFit: "cover",
            width: "100%",
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
