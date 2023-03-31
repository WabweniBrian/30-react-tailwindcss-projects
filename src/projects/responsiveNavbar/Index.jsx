/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./data";

const Index = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="border-b md:border-b-0 px-[4%] md:px-[9%] py-2 bg-slate-100 relative">
      <div className="navbar flex-center-between">
        <a href="/navbar" className="logo !text-xl">
          Wab<span className="text-blue-400">Tech</span>
        </a>
        <button
          className="p-2 md:hidden hover:bg-slate-100 rounded-md"
          onClick={() => setShowLinks(!showLinks)}
        >
          <FaBars />
        </button>
        {/* Primary menu */}
        <ul className="hidden md:flex navbar-menu space-x-8">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url} className="capitalize">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        {/* Mobile menu */}
        <ul
          className={`md:hidden max-h-0 overflow-hidden px-4 shadow space-y-4 navbar-menu absolute top-full left-0 w-full transition-a ${
            showLinks && "showmenu"
          }`}
        >
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url} className="capitalize">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Index;
