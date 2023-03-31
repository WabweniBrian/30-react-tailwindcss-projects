import React from "react";
import { useState } from "react";
import { data } from "../data";

const List = () => {
  const [people, setPeople] = useState(data);


  return (
    <div className="flex-center-center min-h-screen  bg-green-100 font-poppins">
      <div className="max-w-sm shadow-lg w-11/12 bg-white rounded-lg p-4">
        <h1 className="text-2xl border-b">{people.length} Birthdays</h1>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <div className="flex-align-center gap-4 mt-4">
              <img src={image} alt={name} className="w-10 h10 rounded-full" />
              <div className="info">
                <h1 className="text-md">{name}</h1>
                <p className="text-slate-500 text-sm">{age} years</p>
              </div>
            </div>
          );
        })}
        {people.length > 0 && (
          <button
            className="my-6 px-6 py-1 uppercase border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition w-full"
            onClick={() => setPeople([])}
          >
            clear all
          </button>
        )}
      </div>
    </div>
  );
};

export default List;
