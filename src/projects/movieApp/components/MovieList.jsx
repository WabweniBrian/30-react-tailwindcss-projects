import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { addToFavorite } from "../features/movieSlice";

const MovieList = () => {
  const { movies, pending, favoriteMovies } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();

  const getColor = (vote) => {
    if (vote >= 8) {
      return "text-green-500 bg-green-500/20";
    } else if (vote >= 5) {
      return "text-yellow-500 bg-yellow-500/20";
    } else {
      return "text-red-500 bg-red-500/20";
    }
  };

  return (
    <div className="px-[4%] md:p[9%] pb-10 pt-4">
      <h1 className="text-2xl">Movies List</h1>
      {pending && (
        <div className="min-h-screen flex-center-center">
          <div className="loader"></div>
        </div>
      )}
      <div className="grid grid-cols-minmax-uto gap-2 mt-2">
        {movies.map((movie) => {
          const { id, poster, title, released, rating, overview } = movie;
          let ids = [...new Set(favoriteMovies.map((fav) => fav.id))];
          let heartIcon = ids.includes(id) ? true : false;
          return (
            <div
              className="bg-[#111827] shadow-lg rounded-md overflow-hidden"
              key={id}
            >
              <div className="overflow-hidden cursor-pointer relative group">
                <img
                  src={poster}
                  alt={title}
                  className="w-full h-[250px] object-cover group-hover:scale-150 transition-a"
                />
                <div className="p-2 absolute bottom-0 h-[200px] w-full overflow-auto bg-[#0b1219f8] translate-y-full transition-a group-hover:translate-y-0">
                  <p className="opacity-70 uppercase">overview</p>
                  <div className="pt-2">
                    <p className="opacity-70 text-md">
                      Release:{" "}
                      <span className="opacity-60 italic text-red-600">
                        {released}
                      </span>
                    </p>
                    <p className="text-md mt-2">{overview}</p>
                  </div>
                </div>
              </div>

              <div className="p-2 flex-center-between">
                <h1 className="capitalize opacity-80 text-lg">{title}</h1>
                <div>
                  <span
                    className={`text-md rounded-md px-1 ${getColor(rating)}`}
                  >
                    {rating}
                  </span>
                  {heartIcon ? (
                    <FaHeart
                      className="text-lg  ml-1 cursor-pointer text-red-500"
                      onClick={() => dispatch(addToFavorite({ ...movie }))}
                    />
                  ) : (
                    <FiHeart
                      className="text-lg  ml-1 cursor-pointer"
                      onClick={() => dispatch(addToFavorite({ ...movie }))}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
