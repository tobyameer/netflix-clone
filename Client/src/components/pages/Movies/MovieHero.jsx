import React, { useEffect, useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import axios from "axios";
// import trailer from "./batman.mp4";
// import { Player } from "video-react";

const MovieHero = ({ type }) => {
  const [mutes, setMute] = useState(true);
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODMxNGU0ODk2MjAxNTM4NTM2ZmQxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczMjIwMjI5MSwiZXhwIjoxNzMyNjM0MjkxfQ.SW6K9xhoz0kwn_q29EQBlbIa1SvFcF2pgg9Q9XtYkeM",
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div>
      <div className="relative">
        <div className="absolute w-[35%] top-[80px] left-[30px]">
          <div className="h-[80px]">
            <span className=" text-[30px]">{type}</span>
          </div>
          <img src={content.imgTitle} alt="" className="w-[200px]" />
          <p className="my-3 h-[50%] text-[0.4em] md:text-[.6em] overflow-hidden ... max-h-[27px]">
            {content.desc}
          </p>
          <div className="flex gap-3">
            <button className="flex justify-center gap-2 items-center h-[25px] text-[14px] font-semibold rounded w-[80px] bg-white text-black px-">
              <FaPlay size={15} />
              Play
            </button>
            <button
              style={{ backgroundColor: "rgb(100,100,100,0.6)" }}
              className="flex justify-center gap-2 items-center h-[25px] text-[14px] font-semibold rounded w-[120px] bg-black "
            >
              <IoInformationCircleOutline size={15} />
              More Info
            </button>
          </div>
        </div>

        <ReactPlayer
          url={content.trailer}
          width={"100%"}
          height={"500px"}
          playing
          loop
          muted={!mutes ? true : false}
        />
        <div className="flex justify-center absolute top-[370px] right-[70px] w-[30px] h-[30px] border-[1px] border-[#949494] rounded-full">
          <button onClick={() => setMute(!mutes)} className=" text-white">
            {!mutes ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieHero;
