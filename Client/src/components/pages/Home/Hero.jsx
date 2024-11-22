import { MdNavigateNext } from "react-icons/md";
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email, username, password });
      history("/signIn");
    } catch (err) {}
  };
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
        {!email ? (
          <div className="flex flex-col mt-5 max-w-[700px]  sm:flex-row px-[50px] w-full  items-center">
            <input
              type="text"
              ref={emailRef}
              placeholder="Email address"
              className=" w-[100%] h-[55px] rounded-sm text-white border-[1px] pl-3 border-[#767676]"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            />

            <button
              onClick={handleStart}
              className="flex my-6 justify-center  items-center  bg-[#E50914] mx-2 text-white font-semibold text-[22px] sm:w-[400px] w-[180px] h-[50px] rounded-[5px]"
            >
              Get Started <MdNavigateNext className="ml-2" />
            </button>
          </div>
        ) : (
          <form className="flex flex-col mt-5 max-w-[700px]  sm:flex-row px-[50px] w-full  items-center">
            <input
              className=" w-[50%] h-[55px] rounded-sm text-white border-[1px] pl-3 border-[#767676]"
              type="username"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              placeholder="username"
              ref={usernameRef}
            />
            <input
              className=" w-[50%] h-[55px] rounded-sm text-white border-[1px] pl-3 border-[#767676]"
              type="password"
              placeholder="password"
              ref={passwordRef}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            />
            <button
              onClick={handleFinish}
              className="flex my-6 justify-center  items-center  bg-[#E50914] mx-2 text-white font-semibold text-[22px] sm:w-[400px] w-[180px] h-[50px] rounded-[5px]"
            >
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Hero;
