import React from "react";
import logo from "../images/logo.svg";
import { useGlobalContext } from "../contexts/context";
import sublinks from "../data/data";

const Navbar = () => {
  const { dispatch } = useGlobalContext();

  const displaySubmenu = (e) => {
    const pageTitle = e.target.textContent;
    const btnCords = e.target.getBoundingClientRect();
    const center = (btnCords.left + btnCords.right) / 2;
    dispatch({ type: "OPEN_SUBMENU", payload: { page: pageTitle, center } });
  };

  const hideSubMenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      dispatch({ type: "CLOSE_SUBMENU" });
    }
  };

  return (
    <nav
      className="flex-center-center bg-transparent relative !z-50"
      onMouseOver={hideSubMenu}
    >
      <div className="w-[90vw] max-w-[1170px]">
        <div className="flex-center-between">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button
            className="md:hidden text-6 px-3 py-1 rounded-lg text-white bg-slate-600 hover:bg-slate-700 transition-a"
            onClick={() => dispatch({ type: "OPEN_SIDEBAR" })}
          >
            <i className="feather-menu"></i>
          </button>

          <ul className="hidden md:grid md:grid-cols-3 cursor-pointer">
            {sublinks.map((link, index) => {
              return (
                <li onMouseOver={displaySubmenu} key={index}>
                  <button className="w-full px-20 py-2 link-btn cursor-pointer capitalize text-white hover:text-pink-100 transition-a">
                    {link.page}
                  </button>
                </li>
              );
            })}
          </ul>
          <button className="hidden md:block text-white px-6 py-1 rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 hover:bg-gradient-to-bl">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
