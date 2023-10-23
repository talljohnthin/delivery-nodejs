import express from "express";
import isAuthenticated from "../middleware/isAuthenticated";
import {
  getAllOrders,
  updateOrder,
  addOrder,
  cancelOrder,
  completeOrder,
} from "../controllers/order.controller";

export default (router: express.Router) => {
  router.get("/orders", isAuthenticated, getAllOrders);
  router.post("/order", isAuthenticated, addOrder);
  router.patch("/order/:id", isAuthenticated, updateOrder);
  router.patch("/order/cancel/:id", isAuthenticated, cancelOrder);
  router.patch("/order/complete/:id", isAuthenticated, completeOrder);
};
