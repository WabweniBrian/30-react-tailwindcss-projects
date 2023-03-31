/* eslint-disable no-unreachable */
import sublinks from "../data/data";

export const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_SUBMENU":
      const pageItems = sublinks.find(
        (link) => link.page === action.payload.page
      );
      return {
        ...state,
        isSubmenuOpen: true,
        pageItems,
        position: action.payload.center,
      };
      break;
    case "CLOSE_SUBMENU":
      return {
        ...state,
        isSubmenuOpen: false,
      };
      break;
    case "OPEN_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: true,
      };
      break;
    case "CLOSE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: false,
      };
      break;
    default:
      return state;
  }
};
