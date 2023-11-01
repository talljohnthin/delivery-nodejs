import express from "express";
import isAuthenticated from "../middleware/isAuthenticated";
import {
  getAllOrders,
  updateOrder,
  addOrder,
  cancelOrder,
  completeOrder,
} from "../controllers/order.controller";
import asyncMiddleware from "../controllers/async.controller";

export default (router: express.Router) => {
  router.get("/orders", asyncMiddleware(getAllOrders));
  router.post("/order", asyncMiddleware(addOrder));
  router.patch("/order/:id", asyncMiddleware(updateOrder));
  router.patch("/order/cancel/:id", asyncMiddleware(cancelOrder));
  router.patch("/order/complete/:id", asyncMiddleware(completeOrder));
};
