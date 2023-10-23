import express from "express";

import {
  getAllCategories,
  deleteCategory,
  updateCategory,
  addCategory,
} from "../controllers/category.controller";

export default (router: express.Router) => {
  // router.get('/users', isAuthenticated, getAllUsers);
  router.get("/categories", getAllCategories);
  router.post("/category", addCategory);
  router.delete("/category/:id", deleteCategory);
  router.patch("/category/:id", updateCategory);
};
