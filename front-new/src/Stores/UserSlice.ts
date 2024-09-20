import { createSlice } from "@reduxjs/toolkit";

// INITIAL STATES
export interface UserState {
  id: number;
  firstName: string;
}

const initialUserData = {};

// SLICE
export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = userSlice.actions;
