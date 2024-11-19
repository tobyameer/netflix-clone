import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
// import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

const MovieItem = ({ index, item }) => {
  const [hover, setHover] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODMxNGU0ODk2MjAxNTM4NTM2ZmQxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyOTk1NjQ1MSwiZXhwIjoxNzMwMzg4NDUxfQ.FOO6FhTNYQG52yTqgwGB6fjLzmqJr4ogQn_m7S3E4Zs",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getMovie();
  }, [item]);
  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="poster"
        style={{ left: hover && index * 185 + index * 2 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={movie?.imgSm} alt="" className="moviePoster" />
        {hover && (
          <div>
            <ReactPlayer
              url={movie.trailer}
              playing
              loop
              muted
              className="videoItem"
            />

            <div className="absolute mx-3 my-2 bottom-0">
              <div className=" flex gap-4">
                <div className="flex justify-center bg-white align-center items-center rounded-full w-[25px] h-[25px]">
                  <Link to={"Watch"}>
                    <FaPlay size={12} className="pl-[1px] text-black" />
                  </Link>
                </div>
                <div className="flex justify-center border-[#949494] bg-[#323232] align-center items-center rounded-full border-[2px] w-[25px] h-[25px]">
                  <GoPlus size={12} className="pl-[1px] text-white  " />
                </div>
                <div className="flex justify-center border-[#949494] bg-[#323232] align-center items-center rounded-full border-[2px] w-[25px] h-[25px]">
                  <AiOutlineLike size={12} className="pl-[1px] text-white  " />
                </div>
              </div>
              <div>
                <p className="mt-1 text-green-500 text-[13px] font-bold">
                  98% Match
                </p>
                <div className="flex text-[#949494]">
                  <p className="border-[1px] border-[#949494] w-fit px-1 text-[10px] my-1">
                    {movie.limit}
                  </p>
                  <p className="mx-2 text-[13px] items-center flex ">
                    2h 30min
                  </p>
                  <p className="mx-2 text-[13px] items-center flex ">
                    {movie.year}
                  </p>
                </div>
                <p className="text-[12px]">{movie.desc}</p>
                <p className="text-[12px]">{movie.genre}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default MovieItem;
