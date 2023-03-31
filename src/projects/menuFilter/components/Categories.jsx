import React from "react";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex-center-center gap-2 md:gap-4 my-10">
      {categories.map((category, index) => {
        let btnBg =
          selectedCategory === category ? "bg-yellow-500 !text-white" : "";
        return (
          <button
            className={`filter-btn rounded-md px-3 md:px-4 py-1 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition capitalize ${btnBg}`}
            key={index}
            onClick={() => setSelectedCategory(`${category}`)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
