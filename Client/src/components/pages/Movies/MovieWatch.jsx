import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import trailer from "./trailer.mp4";

const MovieWatch = () => {
  return (
    <div className="w-screen h-screen">
      <Link to={"/"}>
        <IoMdArrowBack
          className="flex text-white absolute top-[10px] left-[10px] cursor-pointer z-10"
          size={30}
        />
      </Link>
      <ReactPlayer
        url={trailer}
        width={"100%"}
        height={"100%"}
        playing
        controls
        loop
      />
    </div>
  );
};

export default MovieWatch;
