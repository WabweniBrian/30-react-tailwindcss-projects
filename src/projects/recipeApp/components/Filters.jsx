import React, { useState } from "react";
import { useSelector } from "react-redux";

const Filters = () => {
  const filters = ["chinese", "japanese", "american", "british"];
  const [selectedFilter, setSelectedFilter] = useState("");
  const { isMenuOpen } = useSelector((state) => state.modal);

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      {/* Desktop */}
      <ul className="recipe-filter hidden md:block">
        {filters.map((recipeFilter, index) => {
          let bg =
            recipeFilter === selectedFilter ? "!bg-green-600 !text-white" : "";
          return (
            <li
              key={index}
              className={`pl-4 py-2 cursor-pointer capitalize hover:text-green-600 transition-a ${bg}`}
              onClick={() => handleFilter(recipeFilter)}
            >
              {recipeFilter}
            </li>
          );
        })}
      </ul>
      {/* Mobile */}
      <ul
        className={`recipe-filter fixed top-12 right-10 bg-white px-6 py-3 shadow-normal scale-0 transition-a z-20 ${
          isMenuOpen && "open-menu"
        }`}
      >
        {filters.map((recipeFilter, index) => {
          let bg =
            recipeFilter === selectedFilter ? "!bg-green-600 !text-white" : "";
          return (
            <li
              key={index}
              className={`px-4 py-2 cursor-pointer capitalize hover:text-green-600 transition-a ${bg}`}
              onClick={() => handleFilter(recipeFilter)}
            >
              {recipeFilter}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Filters;
