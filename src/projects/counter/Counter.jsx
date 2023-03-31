import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIfOdd,
  decrement,
  increment,
  incrementBy,
} from "./features/counterSlice";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="flex-center-center text-center min-h-screen flex-col">
      <h1 className="text-4xl">
        <span className="text-green-500">/</span> Counter
      </h1>
      <div className="p-6 mt-10 shadow-normal bg-white rounded-lg max-w-[600px] w-[90%]">
        <h1 className="text-7xl opacity-80">{count.toLocaleString()}</h1>
        <div className="flex-center-center gap-2 mt-4 flex-col md:flex-row">
          <div>
            <p>Increment By</p>
            <input
              type="number"
              className="form-control"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <button
            className="shrink-0 w-10 h-10 rounded-full flex-center-center shadow-normal bg-white"
            onClick={() => dispatch(increment())}
          >
            <i className="feather-plus"></i>
          </button>
          <button
            className="shrink-0 w-10 h-10 rounded-full flex-center-center shadow-normal bg-white"
            onClick={() => dispatch(decrement())}
          >
            <i className="feather-minus"></i>
          </button>
          <button
            className="shrink-0 px-4 py-1 rounded-full shadow-normal bg-gradient-to-bl from-green-700 to-green-400 text-white hover:bg-gradient-to-tr transitio-a"
            onClick={() => dispatch(incrementBy(Number(number)))}
          >
            Add By
          </button>
          <button
            className="shrink-0 px-4 py-1 rounded-full shadow-normal bg-gradient-to-bl from-green-700 to-green-400 text-white hover:bg-gradient-to-tr transitio-a"
            onClick={() => dispatch(addIfOdd(Number()))}
          >
            Add If Odd
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
