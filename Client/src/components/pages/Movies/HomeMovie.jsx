import React, { useState, useEffect } from "react";
import NavHomeMovie from "./NavHomeMovie";
import MovieList from "./MovieList";
import MovieHero from "./MovieHero";
import axios from "axios";

const HomeMovie = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODMxNGU0ODk2MjAxNTM4NTM2ZmQxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczMjIwMjI5MSwiZXhwIjoxNzMyNjM0MjkxfQ.SW6K9xhoz0kwn_q29EQBlbIa1SvFcF2pgg9Q9XtYkeM",
          },
        });
        console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div>
      <NavHomeMovie />
      <MovieHero setGenre={setGenre} type={type} />
      {lists.map((list, index) => (
        <MovieList index={index} key={index} list={list} />
      ))}
    </div>
  );
};

export default HomeMovie;
