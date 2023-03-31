import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Skeleton from "./Skeleton";

const SingleQuote = ({ quotes, loading }) => {
  return !loading ? (
    <div className="grid gap-3 grid-cols-288">
      {quotes &&
        quotes.map((quote, i) => (
          <div
            key={i}
            className=" p-3 border border-slate-700 rounded-lg shadow relative shadow-normal h-72 md:h-64 bg-slate-800"
          >
            <p className="!text-xl">"{quote.text}"</p>
            <p className="text-right my-2 text-slate-400 absolute right-6 bottom-10">
              --{quote?.author || "Anonymous"}
            </p>

            <FaQuoteRight className="absolute right-4 top-4 text-9xl text-slate-500/10" />
          </div>
        ))}
    </div>
  ) : (
    <div className="grid gap-3 grid-cols-288">
      {Array.apply(null, { length: 8 }).map((_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );
};

export default SingleQuote;
