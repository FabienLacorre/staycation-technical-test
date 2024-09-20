import { AppDataSource } from "../../data-source";
import { Hotels } from "../../entities/Hotels";

export const DAL_getAllHotels = async () => {
  const HotelRepository = AppDataSource.getRepository(Hotels);
  return HotelRepository.find();
};
