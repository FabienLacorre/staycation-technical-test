import { createSlice } from "@reduxjs/toolkit";
import { getAllOpenedHotelThunk } from "../../Thunks/HotelThunks";
import { addFetchCaseForList } from "../utils/sliceArrayManager";
import { ApiStatus } from "../../Types/ApiStatus";
import { MultipleEntitiesCustomSlice } from "../utils/Slice";

export interface Hotel {
  id: number;
  name: string;
  stars: number;
  preview: string;
  picture_id: string;
  review_score: number;
  review_count: number;
  is_bookable_on_date: boolean;
  price: number;
  discount_price: number;
  last_bookable_date: Date;
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
    addFetchCaseForList<Hotel>(builder, getAllOpenedHotelThunk);
  },
});

export const {
  updateHotelData: dummyDataUpdateAction,
  clearHotelList: dummyDataClearIdListAction,
} = hotelSlice.actions;
