import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/Users";

export const DAL_getAllUsers = async () => {
  const UserRepository = AppDataSource.getRepository(Users);
  return UserRepository.find();
};

export const DAL_getUserById = async (id: number) => {
  const UserRepository = AppDataSource.getRepository(Users);
  return UserRepository.findOneBy({ id });
};

export const DAL_getUserByFirstName = async (firstName: string) => {
  const UserRepository = AppDataSource.getRepository(Users);
  return UserRepository.findOneBy({ first_name: firstName });
};
