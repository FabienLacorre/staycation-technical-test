import { axiosClient } from "./axios";

export const fetchAllHotel = async (): Promise<any> => {
  return axiosClient.get(`/hotel/all`);
};
