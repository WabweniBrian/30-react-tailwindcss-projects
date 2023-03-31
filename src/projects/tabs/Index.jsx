import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";

const url = "./data/tabs.json";

const Index = () => {
  const [jobs, setjobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setindex] = useState(0);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const jobs = await response.data;
      setjobs(jobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex-center-center bg-[#f1ffff]">
        <h1 className="text-6xl font-bold">Loading...</h1>
      </div>
    );
  }

  const { title, dates, duties, company } = jobs[index];

  return (
    <div className="min-h-screen flex-center-center flex-col gap-10 bg-teal-100/60">
      <h1 className="text-3xl heading text-center font-bold text-teal-900 before:bg-teal-500">
        Job Experience
      </h1>
      <div className="max-w-[800px] w-[90%] mx-auto grid md:grid-cols-5 gap-6">
        {/* Tab Buttons */}
        <div className="flex-center-center gap-6 md:flex-col md:items-start md:justify-start">
          {jobs.map((job, jobIndex) => {
            return (
              <div
                className={`tab-btn cursor-pointer hover:text-teal-500 ${
                  jobIndex === index && "active"
                }`}
                key={job.id}
                onClick={() => setindex(jobIndex)}
              >
                {job.company}
              </div>
            );
          })}
        </div>
        {/* Tab Panels */}
        <div className="my-4 md:col-span-4 md:my-0">
          <h1 className="text-2xl">{title}</h1>
          <p className="mb-3 opacity-60">{dates}</p>
          <span className="bg-teal-500/20 text-teal-800 px-4 py-1 rounded text-sm">
            {company}
          </span>
          <div className="duties">
            {duties.map((duty, index) => {
              return (
                <div key={index} className="flex my-4">
                  <BsChevronDoubleRight className="text-xl text-teal-500" />
                  <p className="text-sm ml-8 text-slate-500">{duty}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
