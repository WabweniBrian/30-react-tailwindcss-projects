import { configureStore } from "@reduxjs/toolkit";
import groceryReducer from "../features/grocerySlice";

export default configureStore({
  reducer: {
    grocery: groceryReducer,
  },
});
