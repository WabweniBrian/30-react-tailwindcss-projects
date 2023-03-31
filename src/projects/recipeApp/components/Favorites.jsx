import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modalMenuSlice";
import { removeFromFavorite } from "../features/recipeSlice";

const Favorites = () => {
  const { favoriteRecipes } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  return (
    <div className="favorite my-2">
      <h1 className="text-center text-3xl">My Favorite Recipes</h1>
      <div className="flex-center-center mt-2 flex-wrap">
        {favoriteRecipes.map((recipe) => {
          const { id, img, title } = recipe;
          return (
            <div className="relative group">
              <div
                className="fav-img  cursor-pointer "
                key={id}
                onClick={() => dispatch(openModal({ ...recipe }))}
              >
                <img
                  src={img}
                  alt={title}
                  className="w-10 h-10 rounded-full mx-auto"
                />
                <p className="text-sm">{title}</p>
              </div>
              <div
                className="md:hidden bg-black/50 text-slate-300 w-6 h-6  absolute -top-2 -right-2 cursor-pointer place-items-center rounded-full grid group-hover:grid"
                onClick={() => dispatch(removeFromFavorite(id))}
              >
                <FaTimes />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
