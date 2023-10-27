import express from "express";
import asyncMiddleware from "../controllers/async.controller";

import {
  getAllCategories,
  deleteCategory,
  updateCategory,
  addCategory,
} from "../controllers/category.controller";
import isAuthenticated from "../middleware/isAuthenticated";

// Todo: add to all route except get isAuthenticated
export default (router: express.Router) => {
<<<<<<< HEAD
  router.get("/categories", asyncMiddleware(getAllCategories));
  router.post("/category", asyncMiddleware(addCategory));
  router.delete("/category/:id", asyncMiddleware(deleteCategory));
  router.patch("/category/:id", asyncMiddleware(updateCategory));
=======
  router.get("/categories", getAllCategories);
  router.post("/categories/create", isAuthenticated, addCategory);
  router.delete("/category/:id", isAuthenticated, deleteCategory);
  router.patch("/category/:id", isAuthenticated, updateCategory);
>>>>>>> 6e90231a29acc21a8b228dd8add8b8de637a07a8
};
