import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 300,
  },
  reducers: {
    increment(state, action) {
      // action.payload // 10
      state.count++;
    },
  },
});

export default CounterSlice;

export let { increment } = CounterSlice.actions;
