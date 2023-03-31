import React, { useEffect } from "react";
import { useUsersContext } from "../context/UsersContext";

const Alert = () => {
  const {
    users,
    alert: { isAlertOpen, alertContent, alertType, icon },
  } = useUsersContext();
  const { dispatch } = useUsersContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: "REMOVE_ALERT" });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [dispatch, users]);

  return (
    <div
      className={`alert todo-alert py-1 w-[300px] md:w-[400px] fixed left-1/2 -translate-x-1/2 -translate-y-32 text-center transition-a top-5  flex-align-center gap-3 px-4 z-50 ${alertType} ${
        isAlertOpen && "show"
      }`}
    >
      <i className={icon}></i>
      {alertContent}
    </div>
  );
};

export default Alert;
