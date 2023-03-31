import React from "react";

const Filters = () => {
  return (
    <div className="bg-white rounded-lg py-2 sm:flex-center-center space-x-4 gap-y-4 -mt-6 mb-6 dark:bg-[#111827] flex-wrap">
      <div className="relative h-8 w-full sm:w-fit ml-4">
        <i className="feather-search absolute top-1/2 -translate-y-1/2 mr-2 text-slate-500" />
        <input
          type="text"
          className="bg-transparent outline-none border-0 rounded-full px-5 h-full placeholder-slate-500"
          placeholder="Filter by title, company.."
        />
      </div>
      <div className="h-8 w-[1px] bg-slate-300 dark:bg-slate-600 hidden md:block"></div>
      <div className="relative h-8 w-full sm:w-fit">
        <i className="feather-map-pin absolute top-1/2 -translate-y-1/2 mr-2 text-slate-500" />
        <input
          type="text"
          className="bg-transparent outline-none border-0 rounded-full px-5 h-full placeholder-slate-500"
          placeholder="Filter by location.."
        />
      </div>
      <div className="h-8 w-[1px] bg-slate-300 dark:bg-slate-600 hidden md:block"></div>
      <div className="input-check flex w-full sm:w-fit">
        <input type="checkbox" id="full" />
        <label htmlFor="full">Full Time Only</label>
      </div>
      <button className="px-5 py-1 rounded-full bg-blue-500  text-white hover:bg-blue-600 transition-a mt-3 sm:mt-0">
        search
      </button>
    </div>
  );
};

export default Filters;
