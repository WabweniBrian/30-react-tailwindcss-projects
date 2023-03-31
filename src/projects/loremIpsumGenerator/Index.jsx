import React from "react";
import { useState } from "react";
import text from "./data";

const Index = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [count, setCount] = useState(0);

  const generateParagraphs = (e) => {
    e.preventDefault();
    let amount = parseInt(count) <= 0 ? 1 : parseInt(count);
    const paragraphs = text.slice(0, amount);
    setParagraphs(paragraphs);
  };

  return (
    <div className="min-h-screen flex bg-green-100/60 text-[#455245]">
      <div className="max-w-[800px] w-[90%] mx-auto my-20">
        <h1 className="text-3xl heading before:bg-green-400 text-center">
          Tired of Boring Lorem Ipsum?
        </h1>
        <div className="flex-center-center my-4 gap-4">
          <p>Number of Paragraphs</p>
          <form className="flex flex-1" onSubmit={generateParagraphs}>
            <input
              type="number"
              className="form-control rounded-none focus:border-green-500"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button className="px-6 py-[0.2rem] bg-green-600 text-white hover:bg-green-700 transition">
              Generate
            </button>
          </form>
        </div>
        <div className="mt-6">
          {paragraphs.map((paragraph, index) => {
            return (
              <p className="text-sm font-nunito py-4 opacity-70" key={index}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
