import React from "react";

const MenuList = ({ menuItems }) => {
  return (
    <div className="my-2 grid md:grid-cols-2 gap-6">
      {menuItems.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;
        return (
          <div className="grid sm:grid-cols-2 gap-4 my-4" key={id}>
            <img
              src={img}
              alt={title}
              className="w-full border-2 border-yellow-800 h-[200px] object-cover"
            />
            <div className="info">
              <div className="flex-center-between border-b pb-2 border-dotted border-slate-500">
                <h1 className="text-md capitalize">{title}</h1>
                <span className="px-2 py-1 rounded-md text-yellow-500 bg-yellow-500/20">
                  ${price}
                </span>
              </div>
              <p className="my-2 text-sm text-slate-500">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
