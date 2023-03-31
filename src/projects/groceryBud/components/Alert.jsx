import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAlert } from "../features/grocerySlice";

const Alert = () => {
  const { alert, items } = useSelector((state) => state.grocery);
  const { isAlertOpen, alertContent, alertClass, icon } = alert;
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
    return () => clearTimeout(timeout);
  }, [dispatch, items]);

  return (
    <div
      className={`alert py-1 w-[300px] md:w-[400px] fixed left-1/2 -translate-x-1/2 -translate-y-32 text-center  transition-a top-5 danger flex-align-center gap-3 px-4 ${alertClass} ${
        isAlertOpen && "show"
      }`}
    >
      <i className={icon}></i>
      {alertContent}
    </div>
  );
};

export default Alert;
