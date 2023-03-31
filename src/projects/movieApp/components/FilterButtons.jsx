import React from "react";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { genres } from "../data/genres";

const FilterButtons = () => {
  const [selectedGenres, setselectedGenres] = useState([]);
  const [isScroll, setisScroll] = useState(false);
  const scrollRef = useRef();

  const scrollFilters = (direction) => {
    setisScroll(true);
    direction === "right"
      ? (scrollRef.current.scrollLeft += 200)
      : (scrollRef.current.scrollLeft -= 200);
    scrollRef.current.scrollLeft > 0 ? setisScroll(true) : setisScroll(false);
  };

  const getMoviesSelected = (id) => {
    let newGenreIds;
    if (!selectedGenres.includes(id)) {
      newGenreIds = [...selectedGenres, id];
    } else {
      newGenreIds = selectedGenres.filter((genreId) => genreId !== id);
    }
    setselectedGenres(newGenreIds);
  };

  return (
    <>
      <h1 className="text-2xl pl-4">Filter Movies</h1>
      <div className="flex items-center space-x-2 w-full pt-8 relative">
        <div
          className={`${
            isScroll ? "md:flex" : "hidden"
          } cursor-pointer absolute left-0 w-36 h-10 justify-start items-center bg-gradient-to-r from-[#0b0f19] pl-4`}
          onClick={() => scrollFilters("left")}
        >
          <FaChevronLeft className="text-xl" />
        </div>
        <div
          className="flex items-center w-full overflow-y-scroll hide_scollbar scroll-smooth space-x-2"
          ref={scrollRef}
        >
          {genres.map((genre) => {
            const { name, id } = genre;
            let btnBg = selectedGenres.includes(id) ? "!bg-green-700" : "";
            return (
              <button
                className={`filterBtn px-5 py-[0.3rem] rounded-full text-white capitalize shrink-0 bg-orange-700 hover:bg-green-700 transition-a ${btnBg} `}
                key={id}
                onClick={() => getMoviesSelected(id)}
              >
                {name}
              </button>
            );
          })}
        </div>

        <div
          className={` cursor-pointer absolute right-0 w-36 h-10 justify-end items-center bg-gradient-to-l from-[#0b0f19] pr-4 hidden md:flex`}
          onClick={() => scrollFilters("right")}
        >
          <FaChevronRight className="text-xl" />
        </div>
      </div>
    </>
  );
};

export default FilterButtons;
