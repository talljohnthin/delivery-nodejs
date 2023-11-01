import express from "express";
import {
  getAllUsers,
  deleteUser,
  updateUser,
  addUser,
} from "../controllers/user.controller";
import isAuthenticated from "../middleware/isAuthenticated";
import asyncMiddleware from "../controllers/async.controller";

export default (router: express.Router) => {
  router.get("/Users", asyncMiddleware(getAllUsers));
  router.post("/User", asyncMiddleware(addUser));
  router.delete("/User/:id", asyncMiddleware(deleteUser));
  router.patch("/User/:id", asyncMiddleware(updateUser));
};
