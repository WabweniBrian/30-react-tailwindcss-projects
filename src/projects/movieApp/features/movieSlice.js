import { createSlice } from "@reduxjs/toolkit";

const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

const initialState = {
  movies: [],
  pending: true,
  error: false,
  favoriteMovies: favoriteMovies,
  randomMovie: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    loading: (state) => {
      state.pending = true;
    },
    success: (state, action) => {
      state.pending = false;
      state.movies = action.payload;
      state.randomMovie =
        action.payload[Math.floor(Math.random() * state.movies.length)];
    },
    rejected: (state) => {
      state.pending = false;
      state.error = true;
    },

    addToFavorite: (state, action) => {
      const favoriteMovie = state.favoriteMovies.find(
        (movie) => movie.id === action.payload.id
      );
      if (favoriteMovie) {
        state.favoriteMovies = state.favoriteMovies.filter(
          (movie) => movie.id !== action.payload.id
        );
      } else {
        state.favoriteMovies = [...state.favoriteMovies, action.payload];
      }
    },

    removeFromFavorite: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    clearAllFavorites: (state) => {
      state.favoriteMovies = [];
    },
  },
});

export default movieSlice.reducer;

export const {
  loading,
  success,
  rejected,
  addToFavorite,
  removeFromFavorite,
  clearAllFavorites,
} = movieSlice.actions;
