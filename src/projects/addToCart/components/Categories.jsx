import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../features/cartSlice";
import { products } from "../products";

const Categories = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("all");

  let categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const handleFilter = (category) => {
    dispatch(filterProducts(category));
    setSelectedCategory(category);
  };

  return (
    <div className="filter-btns flex flex-wrap justify-center gap-2 mt-4">
      {categories.map((category, index) => {
        const btnBg =
          selectedCategory === category ? "bg-yellow-500 !text-white" : "";
        return (
          <button
            className={`px-5 py-1 border border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500 rounded-full capitalize transition-a ${btnBg}`}
            key={index}
            onClick={() => handleFilter(`${category}`)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
