import React, { useState } from "react";
import Alert from "./Alert";
import { questions } from "./quizData";

const Index = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const currentQuestion = questions[index];

  const { question, a, b, c, d, correct } = currentQuestion;

  const loadQuestion = () => {
    let selected = getSelectedAnswer();
    if (selected) {
      let correctAns = correct;
      if (selected === correctAns) {
        setShowAlert(false);
        setScore(score + 1);
      }
      index < questions.length - 1 && setIndex(index + 1);
    } else {
      setShowAlert(true);
    }
    deselectAnswers();
  };

  const getSelectedAnswer = () => {
    let answer;
    document.querySelectorAll("input").forEach((answerElement) => {
      if (answerElement.checked) {
        answer = answerElement.id;
      }
    });
    return answer;
  };

  const deselectAnswers = () => {
    document.querySelectorAll("input").forEach((answerElement) => {
      answerElement.checked = false;
    });
  };

  const removeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="min-h-screen flex-center-center bg-[#0b1219] text-[#f0f3ff]">
      {showAlert && <Alert index={index} removeAlert={removeAlert} />}
      <div className="relative bg-[#101a25] max-w-[500px] w-[95%] h-[450px] p-8 rounded-lg shadow-normal">
        <div className="text-center mb-6">
          <i className="feather-layers text-5xl"></i>
          <h2 className="text-xl">WABZ QUIZ</h2>
          <hr />
        </div>
        {index < questions.length - 1 ? (
          <div id="container">
            <h3 id="question" className="opacity-70 text-lg">
              {question}
            </h3>
            <div className="answers">
              <div className="input-radio my-2">
                <input type="radio" id="a" name="answer" />
                <label htmlFor="a">{a}</label>
              </div>

              <div className="input-radio my-2">
                <input type="radio" id="b" name="answer" />
                <label htmlFor="b">{b}</label>
              </div>

              <div className="input-radio my-2">
                <input type="radio" id="c" name="answer" />
                <label htmlFor="c">{c}</label>
              </div>

              <div className="input-radio my-2">
                <input type="radio" id="d" name="answer" />
                <label htmlFor="d">{d}</label>
              </div>
            </div>
            <p className="opacity-50 absolute text-center bottom-12 left-1/2 -translate-x-1/2">
              {index + 1} of {questions.length}
            </p>
            <button
              className="w-full p-2 bg-[#15283c] absolute left-0 bottom-0 rounded-br-lg rounded-bl-lg transition-a hover:bg-[#1b334d]"
              onClick={loadQuestion}
            >
              SUBMIT
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-center text-[#005c6d] mb-4 text-xl">
              Your Questions are done!
            </h2>
            <button
              className="w-full p-2 bg-[#15283c] absolute left-0 bottom-0 rounded-br-lg rounded-bl-lg transition-a hover:bg-[#1b334d]"
              id="reloadBtn"
              onClick={() => window.location.reload()}
            >
              RELOAD
            </button>
            <p className="text-center mb-4">
              You have scored {score}/{questions.length} questions
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
