import { axiosClient } from "./axios";

export const fetchAllHotel = async (): Promise<any> => {
  return axiosClient.get(`/hotel/all`);
};

export const fetchAllOpenedHotel = async (): Promise<any> => {
  return axiosClient.get(`/hotel/opened`);
};

export const fetchUserById = async (userId: number): Promise<any> => {
  return axiosClient.get(`/user/${userId}`);
};
