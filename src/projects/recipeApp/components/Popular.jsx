import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modalMenuSlice";
import { addToFavorite } from "../features/recipeSlice";
import Modal from "./Modal";

const Popular = () => {
  const { recipes, favoriteRecipes, pending } = useSelector(
    (state) => state.recipes
  );
  const dispatch = useDispatch();

  if (pending) {
    return (
      <div className="min-h-screen flex-center-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <Modal />
      <h1 className="text-3xl text-bold my-4 text-center md:text-left">
        Popular Picks
      </h1>
      <div className="grid grid-cols-minmax-uto-200 gap-2">
        {recipes.map((recipe) => {
          const { id, img, title } = recipe;
          let ids = [...new Set(favoriteRecipes.map((fav) => fav.id))];
          let heartIcon = ids.includes(id) ? true : false;
          return (
            <div className="bg-white rounded overflow-hidden relative" key={id}>
              <div
                className="img overflow-hidden cursor-pointer group"
                onClick={() => dispatch(openModal({ ...recipe }))}
              >
                <img
                  src={img}
                  alt={title}
                  className="object-cover w-full h-[200px] transition-a group-hover:scale-150"
                />
                <div class="w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full place-items-center cursor-pointer bg-black/50 -mt-10 hidden group-hover:grid">
                  <FaEye class="text-2xl hover:text-green-600 text-white  ml-1 cursor-pointer" />
                </div>
              </div>
              <div className="flex-center-between p-4">
                <p className="text-3xl capitalize">{title}</p>
                {heartIcon ? (
                  <FaHeart
                    className="text-xl  ml-1 cursor-pointer text-red-500"
                    onClick={() => dispatch(addToFavorite({ ...recipe }))}
                  />
                ) : (
                  <FiHeart
                    className="text-xl  ml-1 cursor-pointer"
                    onClick={() => dispatch(addToFavorite({ ...recipe }))}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Popular;
