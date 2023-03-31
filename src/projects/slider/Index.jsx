import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import data from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Index = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(index < 0 ? people.length - 1 : index);
    setIndex(index > people.length - 1 ? 0 : index);
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="min-h-screen flex-center-center flex-col">
      <h1 className="text-2xl">
        <span className="text-pink-500">/</span> Slider
      </h1>
      <div className="flex-center-center max-w-[600px] w-[90%] h-[350px] mx-auto relative overflow-hidden">
        {people.map((person, currentIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          position = index === currentIndex ? "activeSlide" : position;
          position =
            currentIndex === index - 1 ||
            (currentIndex === people.length - 1 && index === 0)
              ? "lastSlide"
              : position;
          return (
            <div
              className={`w-full text-center h-full p-6 transition absolute opacity-0 ${position}`}
              key={id}
            >
              <img
                src={image}
                alt={name}
                className="w-20 h-20 rounded-full shadow-xl mx-auto object-cover"
              />
              <div className="info px-10">
                <h1 className="text-md uppercase mt-4">{name}</h1>
                <p className="text-sm text-pink-500 capitalize">{title}</p>
                <p className="text-sm text-slate-500 mt-2">{quote}</p>
                <div className="flex-center-center">
                  <FaQuoteRight className="text-pink-400/10 text-8xl absolute" />
                </div>
              </div>
            </div>
          );
        })}
        <div className="btns">
          <button
            className="w-10 h-10 shadow rounded-full text-pink-500 border bg-white border-pink-500 flex-center-center absolute right-0  top-1/2 translate-y-1/2"
            onClick={() => setIndex(index + 1)}
          >
            <BsChevronRight />
          </button>
          <button
            className="w-10 h-10 shadow rounded-full text-pink-500 border bg-white border-pink-500 flex-center-center absolute left-0 top-1/2 translate-y-1/2"
            onClick={() => setIndex(index - 1)}
          >
            <BsChevronLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
