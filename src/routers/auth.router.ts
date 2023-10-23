import express from "express";
import { login, register } from "../controllers/auth.controller";

export default (router: express.Router) => {
  // router.get('/users', isAuthenticated, getAllUsers);
  router.post("/auth/login", login);
  router.post("/auth/register", register);
};
