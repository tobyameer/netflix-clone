import axios from "axios";
import {
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
  deleteMoviesStart,
  deleteMoviesSuccess,
  deleteMoviesFailure,
  createMoviesStart,
  createMoviesSuccess,
  createMoviesFailure,
} from "./MovieAction";

//get
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMoviesStart());
  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createMoviesSuccess(res.data));
  } catch (err) {
    dispatch(createMoviesFailure());
  }
};

//delete
export const deleteMovies = async (id, dispatch) => {
  dispatch(deleteMoviesStart());
  try {
    await axios.delete("/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMoviesSuccess(id));
  } catch (err) {
    dispatch(deleteMoviesFailure());
  }
};
