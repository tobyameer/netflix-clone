import React, { useState, useEffect } from "react";
import NavHomeMovie from "./NavHomeMovie";
import MovieList from "./MovieList";
import MovieHero from "./MovieHero";
import axios from "axios";
import Footer from "../Home/Footer";

const HomeMovie = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
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
      <Footer />
    </div>
  );
};

export default HomeMovie;
