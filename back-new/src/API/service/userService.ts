import {
  DAL_getAllUsers,
  DAL_getUserById,
} from "../../database/DAL/user/query";
import { throwApiError } from "../router/throwApiError";

export const getAllUserService = async () => {
  return DAL_getAllUsers();
};

export const getUserByIdService = async (id: number) => {
  const user = await DAL_getUserById(id);
  if (!user) {
    throwApiError(500, "User not found");
  }
  return user;
};
