import express from "express";

import {
  createUser,
  deleteUserById,
  getUsers,
  getUserById,
  updateUserById,
} from "../services/user.services";
import { IUser } from "../types";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const addUser = async (req: express.Request, res: express.Response) => {
  const { name, phone } = req.body as IUser;
  try {
    if (!name) {
      return res.status(400).json({ error: true, message: "Name is required" });
    }

    if (!phone) {
      return res
        .status(400)
        .json({ error: true, message: "Phone is required" });
    }

    const User = await createUser(req.body);
    return res.json(User);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { name, phone } = req.body as IUser;

    if (!name) {
      return res.status(400).json({ error: true, message: "Name is required" });
    }

    if (!phone) {
      return res
        .status(400)
        .json({ error: true, message: "Phone is required" });
    }

    await updateUserById(id, req.body);

    const User = await getUserById(id);

    return res.status(200).json(User).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
