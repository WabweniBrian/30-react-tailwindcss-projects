import React from "react";
import { projectMenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [showBtn, setShowBtn] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowBtn(true) : setShowBtn(false);
  });

  return (
    <main className="light">
      <div className="min-h-screen bg-slate-100 px-[3%] md:px-[10%] py-14 text-slate-600  dark:bg-slate-900 dark:text-slate-300">
        <h1 className="heading text-3xl text-center font-bold before:bg-blue-400">
          30 REACT - TAILWINDCSS PROJECTS
        </h1>
        <div className="grid grid-cols-1fr my-4 gap-4">
          {projectMenuItems.map((menuItem) => {
            const { title, url, banner, id } = menuItem;
            return (
              <Link to={url} key={id}>
                <div className="shadow-light border-light bg-white dark:bg-slate-800 rounded-lg overflow-hidden group hover:scale-105 transition w-full">
                  <div className="banner">
                    <div className="image h-72">
                      <img
                        src={banner}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="info p-4 text-center">
                      <h1 className="text-xl group-hover:text-blue-400 transition">
                        {title}
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <button
        className={`back-to-topbtn btn-circle fixed bottom-4 right-4 shadow-normal !shadow-teal-500 ${
          showBtn && "active"
        }`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <i className="feather-chevron-up"></i>
      </button>
    </main>
  );
};

export default Home;
