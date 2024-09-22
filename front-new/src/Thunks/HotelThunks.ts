import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllHotel, fetchAllOpenedHotel } from "../Api/get";

export const getAllHotelThunk = createAsyncThunk(
  "api/hotel/get/all",
  async () => {
    const response = await fetchAllHotel();
    return response.data;
  }
);

export const getAllOpenedHotelThunk = createAsyncThunk(
  "api/hotel/get/opened",
  async () => {
    const response = await fetchAllOpenedHotel();
    return response.data;
  }
);
