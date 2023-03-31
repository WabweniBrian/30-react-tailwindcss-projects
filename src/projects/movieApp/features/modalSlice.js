import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalopen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalopen = true;
    },
    closeModal: (state) => {
      state.isModalopen = false;
    },
  },
});

export default modalSlice.reducer;

export const { openModal, closeModal } = modalSlice.actions;
