import { configureStore } from "@reduxjs/toolkit";
import { navigationSlice } from "./slices/NavigationSlice";
import { useDispatch } from "react-redux";
import { hotelSlice, Hotel } from "./slices/HotelSlice";
import { User, userSlice } from "./slices/UserSlice";
import { MultipleEntitiesCustomSlice, SingleEntityCustomSlice } from "./utils/Slice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface ConfigureStoreEntitiesList {
  user: SingleEntityCustomSlice<User>;
  hotel: MultipleEntitiesCustomSlice<Hotel>;
}

export const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
    user: userSlice.reducer,
    hotel: hotelSlice.reducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
