import React, { useState, useEffect } from "react";
import Tour from "./Tour";

const url = "./data/tours.json";

const Index = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);


  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex-center-center bg-[#fff9f4] text-[#453636]">
        <h1 className="text-6xl">Loading....</h1>
      </div>
    );
  }

  return tours.length !== 0 ? (
    <div className="min-h-screen flex-center-center bg-[#fff9f4] text-[#453636]">
      <div className="max-w-[600px] w-11/12 mx-auto my-4">
        <h1 className="heading text-3xl text-center before:bg-[brown]">
          Tours
        </h1>
        {tours.map((tour) => {
          return <Tour {...tour} removeTour={removeTour} key={tour.id} />;
        })}
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex-center-center bg-[#fff9f4] text-[#453636] text-center flex-col gap-6">
      <h1 className="text-3xl">No more Tours Left</h1>
      <div className="flex-center-center">
        <button
          className="px-6 py-1 mx-auto mt-4 bg-[brown]  text-white transition hover:bg-[#711c1c]"
          onClick={fetchTours}
        >
          Reload
        </button>
      </div>
    </div>
  );
};

export default Index;
