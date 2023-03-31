import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
import themeReducer from "../features/themeSlice";

export default configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
  },
});
