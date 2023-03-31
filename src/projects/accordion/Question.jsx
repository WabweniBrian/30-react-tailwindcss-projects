import React from "react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  return (
    <div>
      <div
        className={`accordion flex-center-between my-4 cursor-pointer border-b hover:text-blue-400 ${
          isActive && "active"
        }`}
        onClick={handleShow}
      >
        <h1 className="text-xl font-bold">{title}</h1>
        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <p
        className={`text-md text-slate-500 p-0 max-h-0 overflow-hidden transition-all ${
          isOpen && "isOpen"
        }`}
      >
        {info}
      </p>
    </div>
  );
};

export default Question;
