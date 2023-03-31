import axios from "axios";
import { useEffect } from "react";
import Banner from "./components/Banner";
import FavoriteModal from "./components/FavoriteModal";
import FilterButtons from "./components/FilterButtons";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { error, pending, rejected, success } from "./features/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./components/Pagination";
import { loading } from "../recipeApp/features/recipeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const url = "./data/movies.json";
  const { favoriteMovies } = useSelector((state) => state.movies);

  const fetchmovies = async () => {
    dispatch(loading());
    try {
      const res = await axios(url);
      dispatch(success(res.data));
    } catch (err) {
      dispatch(rejected());
    }
  };

  useEffect(() => {
    fetchmovies();
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  return (
    <div className="movie-wrapper bg-[#0b0f19] text-slate-200 min-h-screen">
      <NavBar />
      <Banner />
      <FavoriteModal />
      <FilterButtons />
      <MovieList />
      <Pagination />
    </div>
  );
};

export default Home;
