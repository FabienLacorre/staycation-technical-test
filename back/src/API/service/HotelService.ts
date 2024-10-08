import { DAL_getAllHotels } from "../../database/DAL/Hotel/query";
import { DAL_getOpenedHotelListByPeriodId } from "../../database/DAL/opening/query.custom";

export const getAllHotelService = () => {
  return DAL_getAllHotels();
};

export const getOpenedHotelListByPeriodListService = (periodList: any) => {
  return DAL_getOpenedHotelListByPeriodId(periodList);
};
