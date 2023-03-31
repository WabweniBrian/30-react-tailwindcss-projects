import { createContext, useContext, useReducer } from "react";
import { UsersReducer } from "../reducer/UsersReducer";

const usersReducer = createContext();

const usersFromLS = JSON.parse(localStorage.getItem("React-Users")) || [];

const initialState = {
  user: null,
  users: usersFromLS,
  alert: {
    isAlertOpen: false,
    alertContent: "",
    alertType: "",
    icon: "",
  },
};

const UsersProvider = ({ children }) => {
  const [users, dispatch] = useReducer(UsersReducer, initialState);

  return (
    <usersReducer.Provider value={{ ...users, dispatch }}>
      {children}
    </usersReducer.Provider>
  );
};

export default UsersProvider;

export const useUsersContext = () => {
  return useContext(usersReducer);
};
