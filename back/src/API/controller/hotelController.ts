import { RequestHandler } from "express";
import {
  getAllHotelService,
  getOpenedHotelListByPeriodListService,
} from "../service/HotelService";
import { sendError } from "../router/sendError";
import { ApiError } from "../../utils/ApiError";

export const getAllHotelController: RequestHandler = async (
  _req,
  res,
  _next
) => {
  try {
    const hotels = await getAllHotelService();
    res.send(hotels);
  } catch (error) {
    sendError(res, error as ApiError);
  }
};

export const getOpenedHotelListByPeriodList: RequestHandler = async (
  req,
  res,
  _next
) => {
  const { periodId } = req.query;

  try {
    const periodIdNumber = Number.parseInt(periodId as string);
    const hotels = await getOpenedHotelListByPeriodListService(periodIdNumber);
    res.send(hotels);
  } catch (error) {
    sendError(res, error as ApiError);
  }
};
