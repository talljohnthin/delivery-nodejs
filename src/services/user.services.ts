import { UserModel } from "../models/user.model";
import { IUser } from "../types";

export const getUsers = () => UserModel.find();

export const getUserById = (id: string) => UserModel.findById(id);

export const createUser = (values: IUser) =>
  new UserModel(values).save().then((user: any) => user.toObject());

export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({ _id: id });

export const updateUserById = (id: string, values: IUser) =>
  UserModel.findByIdAndUpdate(id, values);
