import React from "react";
import questions from "./data";
import Question from "./Question";

const Index = () => {
  return (
    <div className="min-h-screen flex-center-center bg-blue-50 text-[#394049] font-nunito">
      <div className="max-w-[800px] w-[95%] mx-auto bg-white rounded-lg shadow-lg p-4 grid gap-4 md:grid-cols-3 ">
        <h3 className="text-2xl font-bold text-center md:text-left text-blue-400">
          Question And Answers About Login
        </h3>
        <div className="md:col-span-2">
          {questions.map((question) => {
            return <Question {...question} key={question.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
