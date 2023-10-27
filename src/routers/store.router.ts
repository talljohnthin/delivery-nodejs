import express from "express";

import {
  getAllStores,
  deleteStore,
  updateStore,
  addStore,
} from "../controllers/store.controller";
import isAuthenticated from "../middleware/isAuthenticated";
import asyncMiddleware from "../controllers/async.controller";

export default (router: express.Router) => {
  router.get("/Stores", asyncMiddleware(getAllStores));
  router.post("/Store", asyncMiddleware(addStore));
  router.delete("/Store/:id", asyncMiddleware(deleteStore));
  router.patch("/Store/:id", asyncMiddleware(updateStore));
};
