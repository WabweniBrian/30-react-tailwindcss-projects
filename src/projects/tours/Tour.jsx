import React, { useState } from "react";

const Tour = ({ id, image, name, price, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden mt-4 bg-white">
      <img src={image} alt={name} className="w-full h-[200px] object-cover" />
      <div className="info p-4">
        <div className="flex-center-between">
          <h1 className="text-md">{name}</h1>
          <span className="py-1 px-2 text-yellow-600 bg-yellow-500/20 rounded-lg">
            ${price}
          </span>
        </div>
        <p className="text-sm text-slate-500 my-2">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <span
            className="text-[brown] cursor-pointer ml-2"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Read Less" : "Read More"}
          </span>
        </p>
        <div className="flex-center-center">
          <button
            className="px-6 py-1 mx-auto mt-4 text-[brown] border border-[brown] hover:bg-[brown] hover:text-white transition"
            onClick={() => removeTour(id)}
          >
            Not Intrested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
