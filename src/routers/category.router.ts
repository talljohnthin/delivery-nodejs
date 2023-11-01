import express from "express";

import {
  getCategoriesById,
  getAllCategories,
  deleteCategory,
  updateCategory,
  addCategory,
} from "../controllers/category.controller";
import isAuthenticated from "../middleware/isAuthenticated";

export default (router: express.Router) => {
  router.get("/categories", getAllCategories);
  router.get("/categories/:id", getCategoriesById);
  router.post("/category/create", addCategory);
  router.delete("/category/:id", isAuthenticated, deleteCategory);
  router.patch("/category/:id", updateCategory);
};
