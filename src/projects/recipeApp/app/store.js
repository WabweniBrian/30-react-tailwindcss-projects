import { configureStore } from "@reduxjs/toolkit";
import modalMenuReducer from "../features/modalMenuSlice";

import recipeReducer from "../features/recipeSlice";

export default configureStore({
  reducer: {
    recipes: recipeReducer,
    modal: modalMenuReducer,
  },
});
