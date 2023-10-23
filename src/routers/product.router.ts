import express from "express";

import {
  getAllProducts,
  deleteProduct,
  updateProduct,
  addProduct,
} from "../controllers/product.controller";

export default (router: express.Router) => {
  // router.get('/users', isAuthenticated, getAllUsers);
  router.get("/products", getAllProducts);
  router.post("/product", addProduct);
  router.delete("/product/:id", deleteProduct);
  router.patch("/product/:id", updateProduct);
};
