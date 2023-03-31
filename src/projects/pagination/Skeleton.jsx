import React from "react";

const Skeleton = () => {
  return (
    <div className=" p-3 border border-slate-700 rounded-lg shadow relative shadow-normal h-72 md:h-64 bg-slate-800">
      <p className="w-full bg-slate-900 h-2 rounded-lg animate-pulse"></p>
      <p className=" w-full bg-slate-900 h-2 rounded-lg mt-2 animate-pulse"></p>
      <p className=" w-ful bg-slate-900 h-2 rounded-lg mt-2 animate-pulse"></p>
      <p className=" w-ful bg-slate-900 h-2 rounded-lg mt-2 animate-pulse"></p>
      <p className=" w-4/5 bg-slate-900 h-2 rounded-lg mt-2 animate-pulse"></p>
      <p className="text-right my-2 w-2/5 h-2 rounded-lg  bg-slate-900 text-slate-400 absolute right-6 bottom-10 animate-pulse"></p>
    </div>
  );
};

export default Skeleton;
