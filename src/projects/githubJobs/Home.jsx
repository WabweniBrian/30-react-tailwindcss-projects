import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useFetch } from "./apiCall";
import Banner from "./components/Banner";
import Filters from "./components/Filters";
import JobsList from "./components/JobsList";
import SingleJob from "./components/SingleJob";

// const url = "../data/jobs.json";

const Home = () => {
  //   const { loading, jobs } = useFetch(url);
  const [singleJob, setSingleJob] = useState({ showJob: false, job: {} });
  const [darkMode, setDarkMode] = useState(true);

  const showSingle = (job) => {
    setSingleJob({ showJob: true, job });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode && "dark"}>
      <div className="min-h-screen bg-[#f5f9ff]  text-slate-700 dark:bg-[#0b0f19] dark:text-slate-300">
        <Banner toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="px-[4%] md:px-[9%]">
          <Filters />
          {singleJob.showJob ? (
            <SingleJob singleJob={singleJob.job} setSingleJob={setSingleJob} />
          ) : (
            <JobsList showSingle={showSingle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
