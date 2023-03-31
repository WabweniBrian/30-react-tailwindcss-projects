/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center md:justify-end pb-6 pt-4 md:pr-[4%]">
      <ul className="pagination no-border mt-2 flex w-fit rounded-md">
        <li className="grid place-items-center rounded-md w-20 ">
          <a href="#" className="flex items-center justify-center">
            <i className="feather-chevrons-left"></i>
          </a>
        </li>
        <li className="w-10 grid place-items-center rounded-md active">
          <a
            href="#"
            className="w-full p-[0.4rem] flex items-center justify-center"
          >
            1
          </a>
        </li>
        <li className="w-10 grid place-items-center rounded-md">
          <a
            href="#"
            className="w-full p-[0.4rem] flex items-center justify-center"
          >
            2
          </a>
        </li>
        <li className="w-10 grid place-items-center rounded-md">
          <a
            href="#"
            className="w-full p-[0.4rem] flex items-center justify-center"
          >
            3
          </a>
        </li>
        <li className="grid place-items-center rounded-md w-20">
          <a
            href="#"
            className="w-full p-[0.4rem] flex items-center justify-center"
          >
            <i className="feather-chevrons-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
