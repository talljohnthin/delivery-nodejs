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
  router.get("/stores", asyncMiddleware(getAllStores));
  router.post("/store", asyncMiddleware(addStore));
  router.delete("/store/:id", asyncMiddleware(deleteStore));
  router.patch("/store/:id", asyncMiddleware(updateStore));
};
