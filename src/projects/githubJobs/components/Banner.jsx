/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import BannerImage from "../banner.jpg";

const Banner = ({ toggleDarkMode, darkMode }) => {
  return (
    <div
      className="pt-10 pb-16 text-white px-[4%] md:px-[9%] bg-cover bg-no-repeat rounded-bl-full"
      style={{ background: `url("${BannerImage}")` }}
    >
      <div className="flex-center-between">
        <a href="/github-jobs" className="text-xl font-bold">
          devjobs
        </a>
        <div className="flex-align-center space-x-2">
          <i className="feather-sun"></i>
          <div
            className={`toggle-btn w-10 h-5 rounded-full bg-white relative cursor-pointer ${
              darkMode && "active"
            }`}
            onClick={toggleDarkMode}
          >
            <div className="dot absolute w-3 h-3 rounded-full bg-blue-800 top-1/2 -translate-y-1/2 translate-x-1  transition-a"></div>
          </div>
          <i className="feather-moon"></i>
        </div>
      </div>
    </div>
  );
};

export default Banner;
