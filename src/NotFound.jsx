import React from "react";
import NotFoundImg from "./404.png";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
const NotFound = () => {
  return (
    <div className="min-h-screen flex-center-center flex-col">
      <img src={NotFoundImg} alt="" className="w-[400px]" />
      <h1 className="-mt-8 text-6xl font-bold opacity-50">Page Not Found!!</h1>
      <Link to="/" className="text-blue-500 flex gap-2 items-center">
        <FiArrowLeft />
        Back
      </Link>
    </div>
  );
};

export default NotFound;
