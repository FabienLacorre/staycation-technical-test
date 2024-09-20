import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "../Thunks/userThunks";
import { addFetchCaseForSingle } from "./sliceSingleMananger";
import { ApiStatus } from "../Types/ApiStatus";

// INITIAL STATES
export interface User {
  id?: number;
  first_name: string;
}

const initialUserData = {
  data: {
    first_name: "",
  },
  metaData: {
    apiStatus: ApiStatus.IDLE,
  },
};

// SLICE
export const userSlice = createSlice({
  name: "user",
  initialState: initialUserData,
  reducers: {
    updateUser: (state, action: { type: string; payload: User }) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    addFetchCaseForSingle<User>(builder, getUserById);
  },
});

export const {} = userSlice.actions;
