import { Router } from "express";
import { UserRouter } from "./userRouter";
import { HotelRouter } from "./hotelRouter";

const routes = Router();

routes.use("/user", UserRouter);
routes.use("/hotel", HotelRouter);

export { routes };
