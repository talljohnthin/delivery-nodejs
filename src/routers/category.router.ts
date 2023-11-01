import express from "express";
import asyncMiddleware from "../controllers/async.controller";

import {
  getCategoriesById,
  getAllCategories,
  deleteCategory,
  updateCategory,
  addCategory,
} from "../controllers/category.controller";
import isAuthenticated from "../middleware/isAuthenticated";

// Todo: add to all route except get isAuthenticated
export default (router: express.Router) => {

  router.get("/categories", asyncMiddleware(getAllCategories));
  router.post("/category", asyncMiddleware(addCategory));
  router.delete("/category/:id", asyncMiddleware(deleteCategory));
  router.patch("/category/:id", asyncMiddleware(updateCategory));
  router.get("/categories/:id", getCategoriesById);

};
