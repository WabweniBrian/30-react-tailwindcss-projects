import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementBy: (state, action) => {
      state.count = state.count + action.payload;
    },

    addIfOdd: (state, action) => {
      if (state.count % 2 !== 0) state.count = state.count + 1;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, incrementBy, addIfOdd } =
  counterSlice.actions;
