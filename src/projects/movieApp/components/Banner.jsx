import React from "react";
import { FaStarHalfAlt, FaStar, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../features/movieSlice";

const Banner = () => {
  const { randomMovie, favoriteMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const { poster, title, released, rating, overview } = randomMovie;
  let ids = [...new Set(favoriteMovies.map((fav) => fav.id))];
  let heartIcon = ids.includes(randomMovie.id) ? true : false;

  return (
    <div
      className="-mt-20 h-screen relative flex justify-center flex-col pt-20 px-[4%] md:p[9%] text-center md:text-left bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 20%,
      rgba(5, 5, 6, 0.941)
    ),url("${poster}")`,
      }}
    >
      <div className="max-w-[500px] w-11/12">
        <h1 className="text-6xl capitalize font-bold">{title}</h1>
        <p className="opacity-70 uppercase mt-4">overview</p>
        <p className="mt-2">{overview}</p>
        <div className="mt-4 flex items-center space-x-2 justify-center md:justify-start">
          <span className="text-yellow-500 bg-yellow-500/20 rounded-md px-1">
            {rating}
          </span>
          {heartIcon ? (
            <FaHeart
              className="text-lg  ml-1 cursor-pointer text-red-500"
              onClick={() => dispatch(addToFavorite({ ...randomMovie }))}
            />
          ) : (
            <FiHeart
              className="text-lg  ml-1 cursor-pointer"
              onClick={() => dispatch(addToFavorite({ ...randomMovie }))}
            />
          )}
        </div>
        <div className="flex space-x-2 mt-4 pb-4 text-yellow-500 justify-center md:justify-start">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <p className="opacity-80">
          Released: <span className="opacity-60 italic">{released}</span>{" "}
        </p>
      </div>

      <div className="absolute w-full h-[100px] bg-gradient-to-t from-[#0b0f19] to-transparent bottom-0 left-0"></div>
    </div>
  );
};

export default Banner;
