import React, { useContext, useReducer } from "react";
import { reducer } from "../reducers/reducer";

const AppContext = React.createContext();

const INITIAL_STATE = {
  isSidebarOpen: false,
  isSubmenuOpen: false,
  pageItems: { page: "", links: [] },
  position: "",
};

const AppProvider = ({ children }) => {
  const [openStatus, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <AppContext.Provider value={{ ...openStatus, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
