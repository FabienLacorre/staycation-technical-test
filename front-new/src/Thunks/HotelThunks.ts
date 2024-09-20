import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllHotel } from "../Api/get";

export const getAllHotelThunk = createAsyncThunk(
  "api/hotel/get/all",
  async () => {
    const response = await fetchAllHotel();
    return response.data;
  }
);
