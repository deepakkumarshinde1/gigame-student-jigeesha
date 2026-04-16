import { createSlice } from "@reduxjs/toolkit";
import { getSingleUser, getUser } from "../service/user.api.service";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    users: [],
    loading: false,
    singleUser: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.loading = true;
        state.users = [];
      })
      .addCase(getUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        console.log(action.error.message);
        state.loading = false;
      })
      .addCase(getSingleUser.pending, (state, action) => {
        state.loading = true;
        state.singleUser = null;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        console.log("single user", action.payload);
        state.loading = false;
      })
      .addCase(getSingleUser.rejected, (state, action) => {
        console.log(action.error.message);
        state.loading = false;
      });
  },
});

export default UserSlice;
