import express from "express";

import {
  getAllUsers,
  deleteUser,
  updateUser,
  addUser,
} from "../controllers/user.controller";

export default (router: express.Router) => {
  // router.get('/users', isAuthenticated, getAllUsers);
  router.get("/Users", getAllUsers);
  router.post("/User", addUser);
  router.delete("/User/:id", deleteUser);
  router.patch("/User/:id", updateUser);
};
