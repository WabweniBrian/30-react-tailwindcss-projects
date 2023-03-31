import { useReducer } from "react";
import { createContext } from "react";
import { sidebarModalReducer } from "../reducers/reducer";

export const sidebarModalContext = createContext();

const INITIAL_STATE = {
  isModalOpen: false,
  isSidebarOpen: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sidebarModalReducer, INITIAL_STATE);
  return (
    <sidebarModalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </sidebarModalContext.Provider>
  );
};

export default AppProvider;
