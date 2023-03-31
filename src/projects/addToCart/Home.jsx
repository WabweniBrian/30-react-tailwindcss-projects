import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { getTotals } from "./features/cartSlice";

const Home = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    localStorage.setItem("addToCart-redux", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="cart-bg min-h-screen bg-cartBg bg-no-repeat bg-fixed bg-[##fffcf1]">
      <Navbar />
      <Banner />
      <Categories />
      <Products />
      <Cart />
    </div>
  );
};

export default Home;
