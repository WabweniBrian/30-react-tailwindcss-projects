import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../contexts/context";

const Submenu = () => {
  const { pageItems, isSubmenuOpen, position } = useGlobalContext();
  const { links, page } = pageItems;
  const container = useRef(null);
  const [columns, setColumns] = useState("grid-cols-2");

  useEffect(() => {
    setColumns("grid-cols-2");
    const submenu = container.current;
    submenu.style.left = `${position}px`;
    links.length === 3 && setColumns("grid-cols-3");
    links.length > 3 && setColumns("grid-cols-4");
  }, [position, links]);

  return (
    <aside
      className={`sub-menu hidden  bg-white/80 z-50  text-slate-600 absolute shadow-normal top-11 left-1/2 -translate-x-1/2 p-4 rounded-lg transition-a ${
        isSubmenuOpen && "show"
      }`}
      ref={container}
    >
      <h4 className="capitalize">{page}</h4>
      <div className={`grid gap-4 mt-2 submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { url, label, icon } = link;
          return (
            <li className="list-none index">
              <a
                href={url}
                className="capitalize hover:text-pink-500 transition-a "
              >
                <i className={`mr-2 ${icon}`}></i>
                {label}
              </a>
            </li>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
