import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/cartSlice";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <header className="fixed w-full top-0 left-0 grid py-[0.3rem] bg-[#fffcf1ca] backdrop-blur-sm z-10">
      <div className="flex-center-between flex-col md:flex-row gap-4 w-[90%] mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="address">
            <a href="https://www.google-maps.com">
              <i className="feather-map-pin"></i>{" "}
              <span>Kampala, Luwumu Street, Plot 202</span>
            </a>
          </div>
          <div className="phone">
            <a href="tel:+256775358738">
              <i className="feather-phone"></i> <span>+256775358738</span>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com">
            <i className="feather-facebook"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="feather-twitter"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="feather-instagram"></i>
          </a>
          <a href="https://www.linkedin.com">
            <i className="feather-linkedin"></i>
          </a>
        </div>
      </div>
      <hr className="border-1 border-[#efeae3] mt-2" />
      <div className="flex-center-between gap-4 w-[90%] mx-auto mt-2">
        <a href="/cart" className="flex items-center gap-1">
          <i className="feather-shopping-cart text-xl"></i>
          <h1 className="text-2xl">
            Shop<span className="text-yellow-500">wb</span>
          </h1>
        </a>
        <div className="flex items-center gap-4">
          <div className="input-with-icon">
            <i className="feather-search"></i>
            <input
              type="search"
              name=""
              id=""
              className="form-control"
              placeholder="Search for products..."
            />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => dispatch(openModal())}
          >
            <i className="feather-shopping-cart text-20 text-muted"></i>
            <span className="w-5 h-5 grid place-items-center rounded-full -top-3 -right-3  text-white bg-yellow-500 text-sm absolute">
              {totalQuantity}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
