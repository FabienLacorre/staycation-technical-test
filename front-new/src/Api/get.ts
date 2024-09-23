import { axiosClient } from "./axios";

export const fetchAllHotel = async (): Promise<any> => {
  return axiosClient.get(`/hotel/all`);
};

export const fetchAllOpenedHotelByPeriodId = async ({
  periodId,
}: {
  periodId: number;
}): Promise<any> => {
  return axiosClient.get(`/hotel/opened`, {
    params: {
      periodId,
    },
  });
};

export const fetchUserById = async (userId: number): Promise<any> => {
  return axiosClient.get(`/user/${userId}`);
};
