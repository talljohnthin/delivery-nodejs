import express from "express";
import { login, register } from "../controllers/auth.controller";
import asyncMiddleware from "../controllers/async.controller";

export default (router: express.Router) => {
  router.post("/auth/login", asyncMiddleware(login));
  router.post("/auth/register", asyncMiddleware(register));
};
