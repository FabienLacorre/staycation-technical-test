import axios from "axios";

const API_URL = "http://localhost:3001";

export function sleep(ms = 2000): Promise<void> {
  // console.log("Simulate a delay in the API response to display loader");
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const axiosClient = axios.create({
  baseURL: `${API_URL}`,
});

axiosClient.interceptors.response.use(async (response) => {
  // Simulate a delay in the API response to display loader
  // await sleep(1500);
  return response;
});
