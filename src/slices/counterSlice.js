import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 100,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  //   initialState: {
  //     count: 10,
  //   },
  reducers: {
    increment(state, action) {
      state.count += 1;
    },
    decrement(state, action) {
      state.count -= 1;
    },
    reset(state, action) {
      state.count = initialState.count;
    },
    incrementBy(state, action) {
      state.count += Number(action.payload);
    },
  },
});

export const { increment, decrement, reset, incrementBy } =
  counterSlice.actions;
export default counterSlice.reducer;
