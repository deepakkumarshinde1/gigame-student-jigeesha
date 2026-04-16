import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/counter.slice";
import UserSlice from "./slices/user.slice";

const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    userReducer: UserSlice.reducer,
  },
}); // create store

export default store;
