import { Router } from "express";
import { getAllHotelController } from "../controller/hotelController";

const HotelRouter = Router();

HotelRouter.get("/all", getAllHotelController);

export { HotelRouter };
