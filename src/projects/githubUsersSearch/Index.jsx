import React from "react";
import Form from "./components/Form";
import ResultsContainer from "./components/ResultsContainer";

const Index = () => {
  return (
    <div className="min-h-screen flex-center-center flex-col gap-x-6 bg-[#141c2e] text-white">
      <div className="max-w-[500px] w-[95%] ">
        <h1 className="text-2xl text-bold text-center mb-4">Gitfinder</h1>
        {/* Form */}
        <Form />
        <ResultsContainer />
      </div>
    </div>
  );
};

export default Index;
