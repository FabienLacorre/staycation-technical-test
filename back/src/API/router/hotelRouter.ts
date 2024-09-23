import { Router } from "express";
import { getAllHotelController, getOpenedHotelListByPeriodList } from "../controller/hotelController";

const HotelRouter = Router();

HotelRouter.get("/all", getAllHotelController);

HotelRouter.get("/opened", getOpenedHotelListByPeriodList);

export { HotelRouter };
