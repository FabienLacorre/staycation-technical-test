import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserById } from "../Api/get";

export const getUserById = createAsyncThunk(
  "api/user/get/byId",
  async (userId: number) => {
    const response = await fetchUserById(userId);
    return response.data;
  }
);
