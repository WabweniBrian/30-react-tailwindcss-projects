import axios from "axios";
import React, { useEffect } from "react";
import Popular from "./components/Popular";
import Veggie from "./components/Veggie";
import Favorites from "./components/Favorites";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { error, loading, success } from "./features/recipeSlice";

// import Search from "./components/Search";

const Home = () => {
  const dispatch = useDispatch();
  const url = "./data/recipes.json";
  const { favoriteRecipes } = useSelector((state) => state.recipes);

  const fetchRecipes = async () => {
    dispatch(loading());
    try {
      const res = await axios(url);
      dispatch(success(res.data));
    } catch (err) {
      dispatch(error());
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  return (
    <>
      <div className="bg-[#f1fff8] px-[2%] md:px-[5%] min-h-screen text-slate-700">
        <Navbar />
        <div className="pt-20">
          <Favorites />
          <div className="md:grid grid-cols-6 mt-10 gap-10">
            <Filters />
            <div className="col-span-5">
              <Popular />
              <Veggie />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
