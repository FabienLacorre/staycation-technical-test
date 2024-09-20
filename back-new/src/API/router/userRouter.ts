import { Router } from "express";
import { sendError } from "./sendError";
import { getAllUser } from "../controller/user/getAllUser";
import { getUserById } from "../controller/user/getUserById";
import { ApiError } from "../../utils/ApiError";

const UserRouter = Router();

UserRouter.get("/all", async (req, res) => {
  const users = await getAllUser();
  res.send(users);
});

UserRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await getUserById(Number(id));
    res.send(user);
  } catch (error) {
    sendError(res, error as ApiError);
  }
});

export { UserRouter };
