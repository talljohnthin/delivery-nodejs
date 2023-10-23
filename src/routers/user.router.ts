import express from "express";
import {
  getAllUsers,
  deleteUser,
  updateUser,
  addUser,
} from "../controllers/user.controller";
import isAuthenticated from "../middleware/isAuthenticated";

export default (router: express.Router) => {
  router.get("/Users", getAllUsers);
  router.post("/User", isAuthenticated, addUser);
  router.delete("/User/:id", isAuthenticated, deleteUser);
  router.patch("/User/:id", isAuthenticated, updateUser);
};
