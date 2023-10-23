import express from "express";
import isAuthenticated from "../middleware/isAuthenticated";

import {
  getAllProducts,
  deleteProduct,
  updateProduct,
  addProduct,
} from "../controllers/product.controller";

export default (router: express.Router) => {
  router.get("/products", getAllProducts);
  router.post("/product", isAuthenticated, addProduct);
  router.delete("/product/:id", isAuthenticated, deleteProduct);
  router.patch("/product/:id", isAuthenticated, updateProduct);
};
