import { createSlice } from "@reduxjs/toolkit";

const ItemsFromLocalStorage =
  JSON.parse(localStorage.getItem("grocery-bud-redux")) || [];

const initialState = {
  items: ItemsFromLocalStorage,
  alert: {
    isAlertOpen: false,
    alertContent: "",
    alertClass: "",
    icon: null,
  },
};

export const grocerySlice = createSlice({
  name: "grocery",
  initialState,
  reducers: {
    addUpdateItem: (state, action) => {
      if (!action.payload.items.itemName) {
        state.alert = {
          ...state.alert,
          isAlertOpen: true,
          alertContent: "Please enter an item",
          alertClass: "danger",
          icon: "feather-x-circle",
        };
      } else if (action.payload.items.itemName && action.payload.isEditing) {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.editID) {
            return { ...item, itemName: action.payload.items.itemName };
          }
          return item;
        });
        state.alert = {
          ...state.alert,
          isAlertOpen: true,
          alertContent: "Item Updated successfully",
          alertClass: "success",
          icon: "feather-check-circle",
        };
      } else {
        state.items = [...state.items, action.payload.items];
        state.alert = {
          ...state.alert,
          isAlertOpen: true,
          alertContent: "Item added successfully",
          alertClass: "success",
          icon: "feather-check-circle",
        };
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.alert = {
        ...state.alert,
        isAlertOpen: true,
        alertContent: "Item removed successfully",
        alertClass: "danger",
        icon: "feather-x-circle",
      };
    },
    clearItems: (state, action) => {
      state.items = [];
      state.alert = {
        ...state.alert,
        isAlertOpen: true,
        alertContent: "All Items removed",
        alertClass: "danger",
        icon: "feather-x-circle",
      };
    },
    showAlert: (state) => {
      state.alert = { ...state.alert, isAlertOpen: true };
    },
    removeAlert: (state) => {
      state.alert = { ...state.alert, isAlertOpen: false };
    },
  },
});

export default grocerySlice.reducer;

export const { addUpdateItem, removeItem, clearItems, showAlert, removeAlert } =
  grocerySlice.actions;
