/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import MenuList from "./components/MenuList";
import Categories from "./components/Categories";
import items from "./data";
import { useState } from "react";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Index = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterItems = () => {
    if (selectedCategory === "all") {
      setMenuItems(items);
      return;
    }
    setMenuItems(items.filter((item) => item.category === selectedCategory));
  };

  useEffect(() => {
    filterItems();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-yellow-50">
      <h1 className="text-2xl heading before:bg-yellow-500 pt-6">
        Menu Filter
      </h1>
      <div className="w-[90%] mx-auto">
        {/* Categories */}
        <Categories
          categories={allCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* Menu */}
        <MenuList menuItems={menuItems} />
      </div>
    </div>
  );
};

export default Index;
