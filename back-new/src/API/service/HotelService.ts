import { DAL_getAllHotels } from "../../database/DAL/Hotel/query";

export const getAllHotelService = () => {
  return DAL_getAllHotels();
};
