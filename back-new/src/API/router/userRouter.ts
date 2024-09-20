import { Router } from "express";
import {
  getAllUserController,
  getUserByIdController,
} from "../controller/userController";

const UserRouter = Router();

UserRouter.get("/all", getAllUserController);
UserRouter.get("/:id", getUserByIdController);

export { UserRouter };
