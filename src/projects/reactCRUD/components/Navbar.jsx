/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useUsersContext } from "../context/UsersContext";
import DefaultAvatar from "../avatar.png";
import { FaChevronDown } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { user } = useUsersContext();
  return (
    <div className="fixed w-full top-0 left-0 flex-center-between px-[4%] md:px-[6%] py-1 bg-blue-600 text-blue-100 z-20">
      <a href="#" className="text-3xl">
        Users
      </a>
      <div className="relative flex-align-center space-x-2 cursor-pointer group">
        <img
          src={DefaultAvatar}
          alt=""
          className="w-8 h-8 rounded-full drop-shadow-lg"
        />
        <h1 className="text-sm font-bold capitalize">wabweni brian</h1>
        <FaChevronDown />

        <div className="hidden absolute bg-white shadow-normal top-full  left-0 p-2  gap-2 rounded-lg w-36 text-slate-700 hover:text-blue-600 transition-a group-hover:flex-align-center">
          <FiLogOut /> Logout
        </div>
      </div>
    </div>
  );
};

export default Navbar;
