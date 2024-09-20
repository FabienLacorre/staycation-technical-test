import { createSlice } from "@reduxjs/toolkit";
import { MultipleEntitiesCustomSlice } from "./Slice";
import { getAllHotelThunk } from "../Thunks/HotelThunks";
import { addFetchCaseForList } from "./sliceArrayManager";
import { ApiStatus } from "../Types/ApiStatus";

export interface Hotel {
  id: number;
  name: string;
  stars: number;
  preview: string;
  picture_id: string;
  review_score: number;
  review_count: number;
}

export const hotelSliceInitialState: MultipleEntitiesCustomSlice<Hotel> = {
  idList: [],
  metaData: {
    apiStatus: ApiStatus.IDLE,
  },
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
