import express from "express";
import category from "./category.router";
import tag from "./tag.router";
import store from "./store.router";

const router = express.Router();

export default (): express.Router => {
  category(router);
  tag(router);
  store(router);
  return router;
};
