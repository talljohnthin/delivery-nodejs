import express from "express";

import {
  getAllStores,
  deleteStore,
  updateStore,
  addStore,
} from "../controllers/store.controller";

export default (router: express.Router) => {
  // router.get('/users', isAuthenticated, getAllUsers);
  router.get("/Stores", getAllStores);
  router.post("/Store", addStore);
  router.delete("/Store/:id", deleteStore);
  router.patch("/Store/:id", updateStore);
};
