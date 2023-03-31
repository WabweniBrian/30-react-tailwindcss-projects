import React from "react";
import { useState } from "react";
import data from "./data";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Index = () => {
  const [reviews] = useState(data);
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex(index + 1 > reviews.length - 1 ? 0 : index + 1);
  };
  const prevReview = () => {
    setIndex(index - 1 < 1 ? reviews.length - 1 : index - 1);
  };

  const { name, job, image, text } = reviews[index];
  return (
    <div className="min-h-screen flex-center-center bg-yellow-50 flex-col gap-4 text-center">
      <h1 className="text-2xl">
        <span className="text-yellow-500">/</span> Reviews
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-md mx-auto w-11/12">
        <div className="w-20 h-20 mx-auto relative before:absolute before:w-5 before:h-5 before:right-0 before:bottom-0 before:bg-yellow-500 before:rounded-full before:border-4 before:border-white before:shadow-xl">
          <img src={image} alt={name} className="rounded-full shadow-xl" />
        </div>
        <h1 className="text-md mt-4 capitalize">{name}</h1>
        <p className="text-sm text-yellow-500 capitalize">{job}</p>
        <p className="my-2 text-yellow-900 text-sm">{text}</p>
        <div className="flex-center-center gap-6 mt-4">
          <button
            className="w-10 h-10 shadow-normal bg-white rounded-full grid place-items-center hover:text-yellow-500 transition"
            onClick={prevReview}
          >
            <BsChevronLeft />
          </button>
          <button
            className="w-10 h-10 shadow-normal bg-white rounded-full grid place-items-center hover:text-yellow-500 transition"
            onClick={nextReview}
          >
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
