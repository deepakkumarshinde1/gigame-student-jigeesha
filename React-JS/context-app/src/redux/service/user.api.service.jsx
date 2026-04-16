import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../config/axios.config";

export const getUser = createAsyncThunk("UserSlice/getUser", async () => {
  let { data } = await apiService.get("/users");
  return data;
});

export const getSingleUser = createAsyncThunk(
  "UserSlice/getSingleUser",
  async (id) => {
    let { data } = await apiService.get("/users/" + id);
    return data;
  },
);
