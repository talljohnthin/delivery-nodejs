import express from "express";

import {
  getAllStores,
  deleteStore,
  updateStore,
  addStore,
} from "../controllers/store.controller";
import isAuthenticated from "../middleware/isAuthenticated";

export default (router: express.Router) => {
  router.get("/Stores", getAllStores);
  router.post("/Store", isAuthenticated, addStore);
  router.delete("/Store/:id", isAuthenticated, deleteStore);
  router.patch("/Store/:id", isAuthenticated, updateStore);
};
