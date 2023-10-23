import express from "express";
import isAuthenticated from "../middleware/isAuthenticated";

import {
  getAllProducts,
  deleteProduct,
  updateProduct,
  addProduct,
} from "../controllers/product.controller";

export default (router: express.Router) => {
  // router.get('/users', isAuthenticated, getAllUsers);
  router.get("/products", isAuthenticated, getAllProducts);
  router.post("/product", addProduct);
  router.delete("/product/:id", deleteProduct);
  router.patch("/product/:id", updateProduct);
};
