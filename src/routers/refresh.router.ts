import express from "express";
import {
  deleteToken,
  getNewAccessToken,
} from "../controllers/refresh.controller";

export default (router: express.Router) => {
  // router.get('/users', isAuthenticated, getAllUsers);
  router.post("/refresh", getNewAccessToken);
  router.delete("/refresh", deleteToken);
};
