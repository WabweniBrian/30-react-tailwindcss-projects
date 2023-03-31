import React from "react";
import sublinks from "../data/data";
import { useGlobalContext } from "../contexts/context";

const Sidebar = () => {
  const { dispatch, isSidebarOpen } = useGlobalContext();

  return (
    <aside
      className={`md:hidden sidebar-wrapper fixed top-0 left-0 w-full h-full grid place-items-center transition-a bg-black/30  scale-0 ${
        isSidebarOpen && "show"
      }`}
    >
      <div className="sidebar w-[90vw] h-[95vh] max-w-[350px] bg-slate-100/60 backdrop-blur-sm relative p-4 rounded-xl">
        <button
          className="close-btn text-8 bg-transparent text-slate-600 top-4 right-4 cursor-pointer absolute hover:bg-slate-200 p-1 px-2 rounded-md"
          onClick={() => dispatch({ type: "CLOSE_SIDEBAR" })}
        >
          <i className="feather-delete"></i>
        </button>
        <div className="sidebar-links pt-12 text-slate-800">
          {sublinks.map((sublink, index) => {
            const { links, page } = sublink;
            return (
              <article key={index} className="pt-4">
                <h4 className="mb-2 capitalize">{page}</h4>
                <div className="sidebar-sublinks grid grid-cols-2 gap-y-2">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a
                        href={url}
                        key={index}
                        className="hover:text-pink-500 transition-a capitalize"
                      >
                        <i className={`${icon} mr-1`}></i>
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
