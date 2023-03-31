import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaQuoteRight, FaSpinner } from "react-icons/fa";
const url = "./data/quotes.json";

const Index = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  const getRandomQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const quotes = response.data;
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getRandomQuote();
    }, 5000);
    return () => clearInterval(interval);
  }, [quote]);

  return (
    <div className="flex-center-center min-h-screen bg-slate-900 text-slate-200">
      <div className="relative max-w-[500px] w-[90%] mx-auto shadow-normal h-72 md:h-64 bg-slate-800 p-4 rounded-lg">
        <p className="!text-xl">"{quote.text}"</p>
        <p className="text-right my-2 text-slate-400 absolute right-6 bottom-20">
          --{quote?.author || "Anonymous"}
        </p>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-full flex items-center justify-center">
          <button
            className="px-4 py-1 shadow-normal rounded-full bg-slate-600 hover:bg-slate-700 transition-a"
            onClick={getRandomQuote}
          >
            Generate Random Quote
          </button>
        </div>
        <FaQuoteRight className="absolute right-4 top-4 text-9xl text-slate-500/10" />
        {loading && (
          <div className="text-slate-500 text-4xl flex-center-center">
            <FaSpinner className="animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
