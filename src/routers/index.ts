import express from "express";
import category from "./category.router";
import tag from "./tag.router";
import store from "./store.router";
import product from "./product.router";
import order from "./order.router";
import user from "./user.router";

const router = express.Router();

export default (): express.Router => {
  category(router);
  tag(router);
  store(router);
  product(router);
  order(router);
  user(router);

  return router;
};
