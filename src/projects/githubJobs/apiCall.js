import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url, searchTerm) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios(url);
      const jobs = await response.data;
      setJobs(jobs);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [url]);
  return { loading, jobs };
};
