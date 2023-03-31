import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modalSlice";

import movieReducer from "../features/movieSlice";

export default configureStore({
  reducer: {
    movies: movieReducer,
    modal: modalReducer,
  },
});
