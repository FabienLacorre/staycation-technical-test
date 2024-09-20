import { axiosClient } from "./axios";

export const fetchAllHotel = async (): Promise<any> => {
  return axiosClient.get(`/hotel/all`);
};

export const fetchUserById = async (userId: number): Promise<any> => {
  return axiosClient.get(`/user/${userId}`);
};
