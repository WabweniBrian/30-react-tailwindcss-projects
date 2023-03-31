/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modalSlice";
import Logo from "../images/movie_logo.png";

const NavBar = () => {
  const { favoriteMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [searchValue, setsearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      // console.log(searchValue);
    } else {
      alert("Please enter a search term");
    }
  };

  return (
    <div className="flex items-center justify-between py-3 px-[4%] md:px-[9%] bg-[#06080d]/80 fixed w-full z-10 top-0 left-0">
      <a href="#" className="flex item-center space-x-2 flex-1">
        <img src={Logo} alt="logo" width="35" />
        <h1 className="text-3xl font-bold">
          Wab<span className="text-orange-600">flix</span>
        </h1>
      </a>
      <div className="flex items-center gap-4">
        <form onSubmit={handleSubmit}>
          <div className="input-with-icon transparent w-[100px] md:w-full flex-1">
            <i
              className="feather-search cursor-pointer"
              onClick={handleSubmit}
            ></i>
            <input
              type="search"
              className="form-control bg-transparent"
              placeholder="search for movies.."
              value={searchValue}
              onChange={(e) => setsearchValue(e.target.value)}
            />
          </div>
        </form>
        <div
          className="relative cursor-pointer w-10 h-10 grid place-items-center rounded-full hover:bg-[#111827]/60 transition-a"
          onClick={() => dispatch(openModal())}
        >
          <i className="feather-heart text-xl text-muted"></i>
          <span className="w-5 h-5 grid place-items-center rounded-full -top-0 -right-0  bg-orange-500 text-xs absolute border-2 border-white">
            {favoriteMovies.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
