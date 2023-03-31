/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useContext } from "react";
import { sidebarModalContext } from "../contexts/SidebarModalContext";
import { links, social } from "../data";

const Sidebar = () => {
  const { isSidebarOpen, dispatch } = useContext(sidebarModalContext);

  const closeSidebar = (e) => {
    if (!e.target.classList.contains("sidenav")) {
      dispatch({ type: "CLOSE_SIDEBAR" });
    }
  };

  return (
    <div
      className={`modal ${isSidebarOpen && "showModal"}`}
      onClick={closeSidebar}
    >
      <div
        className={`sidenav bg-white max-w-[300px] min-h-screen p-4 -translate-x-[500px] transition-a ${
          isSidebarOpen && "showModal"
        }`}
      >
        <div className="flex-center-between">
          <a href="#" className="text-2xl">
            Wab<span className="text-teal-500">Tech</span>
          </a>
          <button
            className="rounded-lg hover:bg-slate-100 px-2 py-1"
            onClick={() => dispatch({ type: "CLOSE_SIDEBAR" })}
          >
            <i className="feather-delete text-3xl text-teal-500"></i>
          </button>
        </div>
        <ul className="mt-4">
          {links.map((link) => {
            return (
              <li className="py-3" key={link.id}>
                <a
                  href={link.url}
                  className="capitalize opacity-70 text-sm flex-align-center gap-2"
                >
                  <i className={link.icon}></i>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
