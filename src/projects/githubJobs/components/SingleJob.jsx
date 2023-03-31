/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const SingleJob = ({ singleJob, setSingleJob }) => {
  const { title, company, location, type, description, company_logo, url } =
    singleJob;
  return (
    <div className="py-10">
      <div
        className="flex-center-center space-x-2  cursor-pointer text-blue-500 hover:text-blue-700"
        onClick={() => setSingleJob({ showJob: false, job: {} })}
      >
        <i className="feather-arrow-left"></i>
        <p>Go Back</p>
      </div>
      <div className="bg-white rounded-lg p-4 mt-4 shadow-sm relative dark:bg-[#111827]">
        <img src={company_logo} alt={title} className="w-20 absolute -top-8" />
        <p className="!text-xs opacity-60 mt-10">
          <span>a day ago</span>
          <span className="mx-1 font-extrabold text-lg">.</span>
          <span className="capitalize bg-slate-300 dark:bg-slate-600 dark:text-slate-100 p-1 rounded-full">
            {type}
          </span>
        </p>
        <h1 className="text-3xl capitalize mb-6">{title}</h1>
        <a href={url} className="text-blue-500 underline ">
          {url}
        </a>
        <p className="opacity-80 mt-2">{description}</p>

        <div className="my-3">
          <p className="opacity-70 mb-2">{company}</p>
          <p className="text-blue-500">{location}</p>
        </div>
        <button className="px-5 py-1 rounded-full bg-blue-500 my-4 text-white hover:bg-blue-600 transition-a">
          Apply
        </button>
      </div>
    </div>
  );
};

export default SingleJob;
