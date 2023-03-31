/* eslint-disable no-unreachable */
export const actionTypes = {
  getUsers: "GET_USERS",
  showAlert: "SHOW_ALERT",
  hideAlert: "HIDE_ALERT",
};
export const UsersReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.getUsers:
      return { ...state, users: [...state.users, action.payload] };
      break;
    case actionTypes.showAlert:
      return {
        ...state,
        alert: {
          isAlertOpen: true,
          alertContent: action.payload.alertContent,
          alertType: action.payload.alertType,
          icon: action.payload.icon,
        },
      };
      break;
    case actionTypes.hideAlert:
      return {
        ...state,
        alert: {
          ...alert,
          isAlertOpen: false,
        },
      };
      break;

    default:
      return state;
  }
};
