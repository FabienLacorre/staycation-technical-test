import { configureStore } from "@reduxjs/toolkit";
import { userSlice, UserState } from "./UserSlice";
import { navigationSlice } from "./NavigationSlice";
import { useDispatch } from "react-redux";
import { hotelSlice, Hotel } from "./HotelSlice";
import { MultipleEntitiesCustomSlice, SingleEntityCustomSlice } from "./Slice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface ConfigureStoreEntitiesList {
  user: SingleEntityCustomSlice<UserState>;
  hotel: MultipleEntitiesCustomSlice<Hotel>;
}

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    navigation: navigationSlice.reducer,
    hotel: hotelSlice.reducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
