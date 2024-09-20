import { RequestHandler } from "express";
import { getAllHotelService } from "../service/HotelService";

export const getAllHotelController: RequestHandler = async (req, res, next) => {
  const hotels = await getAllHotelService();
  res.send(hotels);
};
