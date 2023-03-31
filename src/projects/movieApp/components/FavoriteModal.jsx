import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { closeModal } from "../features/modalSlice";
import NoFavMovieImage from "../images/no-fav-movies.png";
import { clearAllFavorites, removeFromFavorite } from "../features/movieSlice";

const FavoriteModal = () => {
  const { isModalopen } = useSelector((state) => state.modal);
  const { favoriteMovies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  const handleModal = (e) => {
    if (e.target.classList.contains("movie-modal")) dispatch(closeModal());
  };

  return (
    <div
      className={`movie-modal fixed w-screen h-screen bg-black/50 top-0 left-0 opacity-0 pointer-events-none transition-a z-50 ${
        isModalopen && "open"
      }`}
      onClick={handleModal}
    >
      <div
        className={`movie-dialog absolute right-0 top-0 max-w-[360px] w-full h-full bg-[#0b0f19] shadow-lg translate-x-[500px] transition-a ${
          isModalopen && "open"
        }`}
      >
        <div className="py-3 px-6 flex justify-between items-center border-b border-b-slate-700">
          <div
            className="w-10 h-10 rounded-full grid place-items-center cursor-pointer hover:bg-[#111827]"
            onClick={() => dispatch(closeModal())}
          >
            <FaTimes />
          </div>
          <h1 className="text-lg opacity-70">FAVORITE MOVIES</h1>
        </div>
        <div className="h-[90vh] overflow-auto">
          {/* No Favorite Movies List */}
          {favoriteMovies.length < 1 && (
            <div className="flex-center-center flex-col text-center">
              <img
                src={NoFavMovieImage}
                alt=""
                className="w-full opacity-50 mt-16"
              />
              <h1 className="text-4xl opacity-60 capitalize">
                no favorite movies yet
              </h1>
            </div>
          )}

          {/* Favorite Movies List */}
          <div className="grid grid-cols-3 gap-2 mt-2 px-4">
            {favoriteMovies.map((favoriteMovie) => {
              const { poster, title, id } = favoriteMovie;
              return (
                <div className="img overflow-hidden relative group" key={id}>
                  <img
                    src={poster}
                    alt={title}
                    className="w-full h-[150px] object-cover rounded-sm cursor-pointer"
                  />
                  <i
                    className="md:hidden feather-delete text-18 text-muted absolute top-0 right-0 p-2 cursor-pointer group-hover:block bg-slate-900/80"
                    onClick={() => dispatch(removeFromFavorite(id))}
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
        {favoriteMovies.length && (
          <div className="absolute p-2 bottom-0 left-0 w-full">
            <button
              className="w-full py-2 rounded-md bg-orange-500 hover:bg-orange-600 transition-a capitalize"
              onClick={() => dispatch(clearAllFavorites())}
            >
              clear all
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteModal;
