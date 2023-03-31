import React from "react";
import BgImage from "./bg.jpg";
import { BsCloud } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { useState } from "react";

const Index = () => {
  const [searchTerm, setsearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen flex-center-center bg-cover bg-no-repeat text-slate-200"
      style={{ backgroundImage: `url("${BgImage}")` }}
    >
      <div className="max-w-[400px] w-[95%] rounded-md bg-black/50 backdrop-blur-sm p-4 text-center">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control bg-transparent placeholder-slate-300"
            placeholder="Enter city name..."
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />
        </form>

        <div className="my-4">
          <BsCloud fontSize={80} className="mx-auto" />
          <h1 className="text-7xl my-4">
            13 <sup className="text-sm">0</sup>C
          </h1>
          <p className="text-lg text-indigo-400 capitalize">broken clouds</p>
          <div className="opacity-70 flex items-center justify-center gap-1">
            <FiMapPin />
            <span className="capitalize">kampala, uganda</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
