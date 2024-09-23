import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllHotel, fetchAllOpenedHotelByPeriodId } from "../Api/get";

export const getAllHotelThunk = createAsyncThunk(
  "api/hotel/get/all",
  async () => {
    const response = await fetchAllHotel();
    return response.data;
  }
);

export const getAllOpenedHotelThunkByPeriodId = createAsyncThunk(
  "api/hotel/get/opened",
  async ({ periodId }: { periodId: number }) => {
    const response = await fetchAllOpenedHotelByPeriodId({ periodId });
    return response.data;
  }
);
