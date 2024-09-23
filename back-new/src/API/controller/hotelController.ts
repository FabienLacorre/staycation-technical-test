import { RequestHandler } from "express";
import {
  getAllHotelService,
  getOpenedHotelListByPeriodListService,
} from "../service/HotelService";

export const getAllHotelController: RequestHandler = async (
  _req,
  res,
  _next
) => {
  const hotels = await getAllHotelService();
  res.send(hotels);
};

export const getOpenedHotelListByPeriodList: RequestHandler = async (
  req,
  res,
  _next
) => {
  const { periodId } = req.query;
  
  const hotels = await getOpenedHotelListByPeriodListService(periodId);
  res.send(hotels);
};
