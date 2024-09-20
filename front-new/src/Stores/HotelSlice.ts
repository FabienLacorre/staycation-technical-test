import { createSlice } from "@reduxjs/toolkit";
import { MultipleEntitiesCustomSlice } from "./Slice";
import { getAllHotelThunk } from "../Thunks/HotelThunks";
import { addFetchCaseForList } from "./sliceArrayManager";

export interface Hotel {
  id: number;
  name: string;
  stars: number;
  preview: string;
  picture_id: string;
}

export const hotelSliceInitialState: MultipleEntitiesCustomSlice<Hotel> = {
  idList: [],
  metaData: {},
  dataMap: {},
};

export const hotelSlice = createSlice({
  name: "hotel",
  initialState: hotelSliceInitialState,
  reducers: {
    clearHotelList: (state) => {
      state.idList = [];
    },
    updateHotelData: (state, action: { type: string; payload: Hotel }) => {
      state.dataMap[action.payload.id].data = action.payload;
    },
  },
  extraReducers: (builder) => {
    addFetchCaseForList<Hotel>(builder, getAllHotelThunk);
  },
});

export const {
  updateHotelData: dummyDataUpdateAction,
  clearHotelList: dummyDataClearIdListAction,
} = hotelSlice.actions;
