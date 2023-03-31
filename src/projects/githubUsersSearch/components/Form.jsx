import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div className="relative h-[38px]">
          <i className="feather-search absolute text-[#444c79] top-[0.7rem] left-2"></i>
          <input
            type="text"
            placeholder="Search Github usernames.."
            className="bg-[#1f2947] border-none outline-none h-full w-full top-0 px-8 rounded-md shadow-normal"
          />
          <button className="absolute px-4 py-1 right-2 top-1 bg-[#13172e] rounded-md hover:bg-[#101428] transition-a text-slate-200">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
