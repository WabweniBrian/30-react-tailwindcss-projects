import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../features/modalMenuSlice";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-10 bg-inherit">
      <div className="flex-center-between gap-4 w-[90%] mx-auto mt-2">
        <a href="/recipe-app" className="flex-align-center text-3xl gap-1">
          <span>🥗</span>
          <h1>
            Recipe<span className="text-green-600">wb</span>
          </h1>
        </a>
        <div className="flex-align-center gap-4">
          <form onSubmit={handleSubmit}>
            <div className="input-with-icon w-32 md:w-full">
              <i className="feather-search"></i>
              <input
                type="search"
                className="form-control"
                placeholder="Search for recipes..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </form>
          <div
            className="humberger-icon cursor-pointer md:hidden"
            onClick={() => dispatch(toggleMenu())}
          >
            <i className="feather-menu text-20"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
