import { getAllUserService, getUserByIdService } from "../service/userService";
import { RequestHandler } from "express";
import { sendError } from "../router/sendError";
import { ApiError } from "../../utils/ApiError";

export const getAllUserController: RequestHandler = async (req, res, next) => {
  try {
    const users = await getAllUserService();
    res.send(users);
  } catch (error) {
    sendError(res, error as ApiError);
  }
};

export const getUserByIdController: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await getUserByIdService(Number(id));
    res.send(user);
  } catch (error) {
    sendError(res, error as ApiError);
  }
};
