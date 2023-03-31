export const sidebarModalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isModalOpen: true };
      break;
    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };
      break;
    case "OPEN_SIDEBAR":
      return { ...state, isSidebarOpen: true };
      break;
    case "CLOSE_SIDEBAR":
      return { ...state, isSidebarOpen: false };
      break;
    default:
      return state;
  }
};
