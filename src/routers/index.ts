import express from "express";
import category from "./category.router";
import tag from "./tag.router";
import store from "./store.router";
import product from "./product.router";
import order from "./order.router";
import user from "./user.router";
import auth from "./auth.router";
import refresh from "./refresh.router";
import image from "./image.router";

const router = express.Router();

export default (): express.Router => {
  category(router);
  tag(router);
  store(router);
  product(router);
  order(router);
  user(router);
  auth(router);
  refresh(router);
  image(router);

  return router;
};
