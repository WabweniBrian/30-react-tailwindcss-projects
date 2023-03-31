import React, { useEffect } from "react";

const Alert = ({ index, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [index, removeAlert]);

  return (
    <div className="fixed w-72 top-2  left-1/2 text-center -translate-x-1/2 md:w-96">
      <div className=" pt-1 pb-1 text-red-500 bg-red-500/10 border-l-4 border-red-500 flex items-center">
        <i className="feather-alert-circle ml-2 mr-1"></i>
        <span>Please select an answer</span>
      </div>
    </div>
  );
};

export default Alert;
