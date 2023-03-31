import React from "react";
import { useFetch } from "../apiCall";
import Pagination from "./Pagination";

const url = "../data/jobs.json";

const JobsList = ({ showSingle }) => {
  const { loading, jobs } = useFetch(url);

  return !loading ? (
    <div>
      <div className="grid grid-cols-minmax-uto gap-x-4 gap-y-10 py-10">
        {jobs.map((job) => {
          const { id, title, company, location, type, company_logo } = job;
          return (
            <div
              className="bg-white  p-4 rounded-md relative shadow-sm cursor-pointer group dark:bg-[#111827]"
              onClick={() => showSingle(job)}
              key={id}
            >
              <img
                src={company_logo}
                alt={title}
                className="w-14 absolute -top-8"
              />
              <p className="!text-xs opacity-60 mt-4">
                <span>a day ago</span>
                <span className="mx-1 font-extrabold text-lg">.</span>
                <span className="capitalize">{type}</span>
              </p>
              <h1 className="text-lg group-hover:text-blue-500 transition-a">
                {title}
              </h1>
              <p className="opacity-70 mb-2">{company}</p>
              <p className="text-blue-500">{location}</p>
            </div>
          );
        })}
      </div>
      <Pagination />
    </div>
  ) : (
    <div className="min-h-screen flex-center-center">
      <div className="loader"></div>
    </div>
  );
};

export default JobsList;
