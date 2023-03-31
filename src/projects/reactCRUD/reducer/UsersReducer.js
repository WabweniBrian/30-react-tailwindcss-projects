/* eslint-disable no-unreachable */
export const UsersReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      //   return { ...state, users: [...state.users, action.payload.user] };
      if (
        !action.payload.user.name &&
        !action.payload.user.email &&
        !action.payload.user.phone
      ) {
        return {
          ...state,
          alert: {
            isAlertOpen: true,
            alertContent: "Please fill in all the fields",
            alertType: "danger",
            icon: "feather-x-circle",
          },
        };
      } else if (
        action.payload.user.name &&
        action.payload.user.email &&
        action.payload.user.phone &&
        action.payload.isEditing
      ) {
        return {
          ...state,
          users: state.users.map((user) => {
            if (user.id === action.payload.editId) {
              return { ...action.payload.user };
            }
            return { ...user };
          }),
          alert: {
            isAlertOpen: true,
            alertContent: "User updated successfully",
            alertType: "success",
            icon: "feather-check-circle",
          },
        };
      } else {
        return {
          ...state,
          users: [...state.users, action.payload.user],
          alert: {
            isAlertOpen: true,
            alertContent: "User added successfully",
            alertType: "success",
            icon: "feather-check-circle",
          },
        };
      }
      break;
    case "REMOVE_USER":
      const newUsers = state.users.filter((user) => user.id !== action.payload);
      return {
        ...state,
        users: newUsers,
        alert: {
          isAlertOpen: true,
          alertContent: "User deleted successfully",
          alertType: "danger",
          icon: "feather-x-circle",
        },
      };
      break;
    case "REMOVE_ALERT":
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
