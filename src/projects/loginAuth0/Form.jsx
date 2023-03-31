import React from "react";
import { useState } from "react";

const Form = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="flex-center-center min-h-screen bg-green-50/50 text-[#4e4e3e]">
      <div className="max-w-[350px] w-[90%] shadow-normal p-4 bg-white rounded-lg">
        <h1 className="heading heading-auth text-xl">
          {login ? "Create Account" : "Login"}{" "}
        </h1>
        <div className="form-inputs">
          <form autoComplete="off">
            <div className="form-input relative mt-5">
              <input type="text" className="input" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-input relative mt-3">
              <input type="password" className="input" required />
              <label htmlFor="password">Password</label>
            </div>

            <button className="w-full py-1 bg-green-500 text-white rounded-sm my-4 hover:bg-green-600 transition-a">
              {login ? "Login" : "Register"}
            </button>
          </form>
          <h1 className="heading heading-auth text-sm before:w-full after:w-full">
            Or {login ? "Login" : "Register"} With
          </h1>
          <div className="flex-center-center gap-4 mt-2 cursor-pointer">
            <img src="./images/logos/Facebook.png" alt="" width="30" />
            <img src="./images/logos/google.png" alt="" width="30" />
            <img src="./images/logos/twitter.png" alt="" width="30" />
          </div>
          <p className="text-center mt-3 cursor-pointer">
            {login ? "Don't" : "Already"} have an account?{" "}
            <span className="text-green-500" onClick={() => setLogin(!login)}>
              {login ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
