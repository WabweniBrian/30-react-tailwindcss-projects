import { createSlice } from "@reduxjs/toolkit";

const favoriteRecipes =
  JSON.parse(localStorage.getItem("favoriteRecipes")) || [];

const initialState = {
  recipes: [],
  pending: true,
  error: false,
  favoriteRecipes: favoriteRecipes,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    loading: (state) => {
      state.pending = true;
    },
    success: (state, action) => {
      state.recipes = action.payload;
      state.pending = false;
    },
    error: (state) => {
      state.error = true;
      state.pending = false;
    },

    addToFavorite: (state, action) => {
      const favoriteRecipe = state.favoriteRecipes.find(
        (recipe) => recipe.id === action.payload.id
      );
      if (favoriteRecipe) {
        state.favoriteRecipes = state.favoriteRecipes.filter(
          (recipe) => recipe.id !== action.payload.id
        );
      } else {
        state.favoriteRecipes = [...state.favoriteRecipes, action.payload];
      }
    },

    removeFromFavorite: (state, action) => {
      state.favoriteRecipes = state.favoriteRecipes.filter(
        (recipe) => recipe.id !== action.payload
      );
    },
  },
});

export default recipeSlice.reducer;

export const { loading, success, error, addToFavorite, removeFromFavorite } =
  recipeSlice.actions;
