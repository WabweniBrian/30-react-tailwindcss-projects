/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

const ResultsContainer = () => {
  const [loading, setLoading] = useState(false);
  const repos = [
    "repo1",
    "repo2",
    "repo3",
    "repo4",
    "repo5",
    "repo6",
    "repo7",
    "repo8",
    "repo9",
    "repo10",
    "repo11",
    "repo12",
    "repo13",
    "repo14",
  ];

  return (
    <div className="p-4 mt-4 relative  rounded-lg flex shadow-normal bg-[#1f2947] flex-col items-center md:flex-row md:items-start gap-y-4">
      {loading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
          <div className="loader w-10 h-10 border-2 rounded-full"></div>
        </div>
      )}
      <img
        src="/images/person_5.jpg"
        alt=""
        className="w-16 h-16 rounded-full shadow-normal shadow-[#0b0e19]"
      />
      <div className="ml-4 text-center md:text-left">
        <h3 className="mb-3">Brad Travesy</h3>
        <p className="opacity-60">
          Lorem ipsum dolor sit amet consectetur, isicing elit. Vel dolore
          laboriosam hic quam praesentium quaerat sint autem, repellat eveniet.
          Reiciendis.
        </p>
        <div className="flex justify-evenly items-center bg-[#141c2e] my-4 mx-0 rounded-md p-2 text-slate-300 space-x-3">
          <div className="flex-center-center flex-col">
            <p>
              <i className="feather-folder"></i> Repos
            </p>
            <h4>8</h4>
          </div>
          <div className="h-10 w-[1px] bg-slate-600"></div>
          <div className="flex-center-center flex-col">
            <p>
              <i className="feather-users"></i> Followers
            </p>
            <h4>38950</h4>
          </div>
          <div className="h-10 w-[1px] bg-slate-600"></div>
          <div className="flex-center-center flex-col">
            <p>
              <i className="feather-user"></i> Following
            </p>
            <h4>30</h4>
          </div>
        </div>
        <div className="list-repos">
          <ul className="list-none flex flex-wrap gap-2">
            {repos.map((repo) => {
              return (
                <li className="bg-slate-500 px-2 rounded-full text-sm text-slate-200 hover:bg-slate-600 transition-a">
                  <a href="#">Repo1</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultsContainer;
