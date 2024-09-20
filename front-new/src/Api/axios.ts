import axios from "axios";

const API_URL = "http://localhost:3000";

export function sleep(ms = 2000): Promise<void> {
  console.log("Kindly remember to remove `sleep`");
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const axiosClient = axios.create({
  baseURL: `${API_URL}`,
});

axiosClient.interceptors.response.use(async (response) => {
  // This is completly intentional, to simulate a delay in the API response and display loader
  // This is completly intentional, to simulate a delay in the API response and display loader
  // This is completly intentional, to simulate a delay in the API response and display loader
  // This is completly intentional, to simulate a delay in the API response and display loader
  // This is completly intentional, to simulate a delay in the API response and display loader
  await sleep(1500);
  return response;
});
