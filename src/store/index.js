import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };
// console.log(store.getState());
// store.dispatch({
//   type : 'song/addSong',
//   payload : 'New Song!!!'
// })
// console.log(store.getState());
// console.log("-----", moviesSlice.actions);
