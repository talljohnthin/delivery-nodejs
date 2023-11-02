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
  router.post("/category/create", asyncMiddleware(addCategory));
  router.delete("/categories/delete/:id", asyncMiddleware(deleteCategory));
  router.patch("/categories/edit/:id", asyncMiddleware(updateCategory));
  router.get("/categories/:id", getCategoriesById);

};
