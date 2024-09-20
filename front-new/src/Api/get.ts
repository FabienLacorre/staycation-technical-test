import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchAllHotel = async (): Promise<any> => {
  return axios.get(`${API_URL}/hotel/all`);
};
