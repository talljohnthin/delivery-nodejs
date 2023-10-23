import express from "express";

import {
  getAllOrders,
  updateOrder,
  addOrder,
  cancelOrder,
  completeOrder,
} from "../controllers/order.controller";

export default (router: express.Router) => {
  // router.get('/users', isAuthenticated, getAllUsers);
  router.get("/orders", getAllOrders);
  router.post("/order", addOrder);
  router.patch("/order/:id", updateOrder);
  router.patch("/order/cancel/:id", cancelOrder);
  router.patch("/order/complete/:id", completeOrder);
};
