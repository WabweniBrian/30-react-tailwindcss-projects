import React, { useState } from "react";
import Form from "./Form";

const Index = () => {
  const [values, SetValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have successfully registerd");
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="bg-orange-100/60 min-h-screen flex-center-center flex-col">
      <h1 className="text-3xl heading before:bg-orange-500 text-center">
        FORM VALIDATION
      </h1>
      <div className="max-w-[400px] w-[90%] shadow-normal rounded-lg bg-white p-4 mt-10">
        <Form
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Index;
