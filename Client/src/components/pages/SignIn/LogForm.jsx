import React, { useContext, useState } from "react";
import { login } from "../../../authContext/apiCalls";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../authContext/AuthContext";
import { useNavigate } from "react-router-dom";

const LogForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password }, dispatch);
      const user = localStorage.getItem("user");
      if (!user) {
        alert("Invalid Credentials!");
      } else {
        navigate("/profiles");
      }
    } catch (error) {
      alert("Something went wrong during login");
    }
  };
  return (
    <div>
      <div className="mt-[20px] flex justify-center ">
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          className="px-[60px] py-[45px] flex flex-col  align-center w-[435px] h-[680px]"
        >
          <h1 className="text-[32px] pb-4 font-bold">Sign In</h1>
          <input
            type="text"
            placeholder="Email or mobile number"
            onChange={(e) => setEmail(e.target.value)}
            className="my-1  w-full  h-[55px] rounded-md text-white border-[1px] pl-3 border-[#767676]"
            style={{ backgroundColor: "rgba(30, 30, 30, 0.5" }}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="my-3 w-full h-[55px] rounded-md text-white border-[1px] pl-3 border-[#767676]"
            style={{ backgroundColor: "rgba(30, 30, 30, 0.5" }}
          />
          <button
            onClick={handleLogin}
            className="flex justify-center items-center  bg-[#E50914]  text-white  text-[16px] w-full h-[37px] rounded-[5px]"
          >
            Sign In
          </button>
          <p className="my-3 text-center text-[#9D9D9D]">OR</p>
          <button
            className=" w-full h-[37px] border-none rounded-md text-white border-[1px] border-[#767676]"
            style={{ backgroundColor: "rgba(200, 200, 200, 0.25" }}
          >
            Use a Sign-In Code
          </button>
          <a href="/" className="my-3 text-center font-extralight">
            Forgot password?
          </a>
          <div className="flex">
            <input type="checkbox" name="" id="" className="w-[17px]" />
            <p className="mx-3 font-extralight">Remember me</p>
          </div>
          <p className="my-3 font-extralight text-gray-400">
            New to Netflix?
            <a href="/" className="text-white">
              Sign up now.
            </a>
          </p>
          <p className="font-extralight text-[12px] text-[#9D9D9D]">
            This page is protected by google reCAPTCHA to ensure your not a bot.{" "}
            <a href="/" className="text-[#3F5EFF]">
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogForm;
