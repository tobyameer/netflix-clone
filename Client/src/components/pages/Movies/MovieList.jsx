import React, { useState, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import MovieItem from "./MovieItem";

const MovieList = ({ list }) => {
  const [slider, setSlider] = useState(0);
  const [distance, setDistance] = useState(0);

  const listRef = useRef();

  const handleFunction = (direction) => {
    if (direction === "left" && slider > 0) {
      setSlider(slider - 1);
      listRef.current.style.transform = `translateX(${193 - distance}px)`;
      setDistance(distance - 193);
    }
    if (direction === "right" && slider < 4) {
      setSlider(slider + 1);
      listRef.current.style.transform = `translateX(${-193 - distance}px)`;
      setDistance(distance + 193);
    } else {
      console.log("error");
    }
  };

  return (
    <div className="mb-[40px]">
      <p className="ml-[30px] mb-[10px]">{list.title}</p>
      <div className="relative ">
        <IoIosArrowBack
          onClick={() => handleFunction("left")}
          size={25}
          className={
            slider === 0
              ? "hidden"
              : "bg-[#0C0C0CE6] w-[30px] h-[130px] absolute top-0 bottom-0 m-auto z-30"
          }
        />

        <div ref={listRef} className=" flex gap-2 mx-[30px] w-max">
          {list.content.map((item, index) => (
            <MovieItem index={index} key={index} item={item} />
          ))}
          <MovieItem index={0} />
        </div>
        <IoIosArrowForward
          onClick={() => handleFunction("right")}
          size={25}
          className="bg-[#0C0C0CE6]  w-[30px] h-[130px] absolute align-center justify-center top-0 bottom-0 m-auto right-0"
        />
      </div>
    </div>
  );
};

export default MovieList;
