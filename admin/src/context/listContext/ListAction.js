export const getListsStart = () => ({
  type: "GET_LISTS_START",
});
export const getListsSuccess = (movies) => ({
  type: "GET_LISTS_SUCCESS",
  payload: movies,
});
export const getListsFailure = () => ({
  type: "GET_LISTS_FAILURE",
});

export const deleteListsStart = () => ({
  type: "DELETE_LIST_START",
});
export const deleteListsSuccess = (id) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: id,
});
export const deleteListsFailure = () => ({
  type: "DELETE_LIST_FAILURE",
});
// export const updateListsStart = () => ({
//   type: "UPDATE_MOVIES_START",
// });
// export const updateMoviesSuccess = (id) => ({
//   type: "UPDATE_MOVIES_SUCCESS",
//   payload: id,
// });
// export const updateMoviesFailure = () => ({
//   type: "UPDATE_MOVIE_FAILURE",
// });
// export const createMoviesStart = () => ({
//   type: "CREATE_MOVIE_START",
// });
// export const createMoviesSuccess = (movie) => ({
//   type: "CREATE_MOVIE_SUCCESS",
//   payload: movie,
// });
// export const createMoviesFailure = () => ({
//   type: "CREATE_MOVIE_FAILURE",
// });
