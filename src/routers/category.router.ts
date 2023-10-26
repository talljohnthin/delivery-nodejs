import express from "express";

import {
  getAllCategories,
  deleteCategory,
  updateCategory,
  addCategory,
} from "../controllers/category.controller";
import isAuthenticated from "../middleware/isAuthenticated";

export default (router: express.Router) => {
  router.get("/categories", getAllCategories);
  router.post("/categories/create", isAuthenticated, addCategory);
  router.delete("/category/:id", isAuthenticated, deleteCategory);
  router.patch("/category/:id", isAuthenticated, updateCategory);
};
