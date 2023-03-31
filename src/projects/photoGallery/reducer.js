export const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isModalOpen: true };
      break;
    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };
      break;
    case "GET_PHOTOS":
      return { ...state, photos: action.payload };
      break;
    default:
      return state;
  }
};
