import express from "express";
import isAuthenticated from "../middleware/isAuthenticated";
import asyncMiddleware from "../controllers/async.controller";

import {
  getAllProducts,
  deleteProduct,
  updateProduct,
  addProduct,
} from "../controllers/product.controller";

export default (router: express.Router) => {
  router.get("/products", asyncMiddleware(getAllProducts));
  router.post("/product", asyncMiddleware(addProduct));
  router.delete("/product/:id", asyncMiddleware(deleteProduct));
  router.patch("/product/:id", asyncMiddleware(updateProduct));
};
