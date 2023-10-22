import express from "express";
import category from "./category.router";
import tag from "./tag.router";

const router = express.Router();

export default (): express.Router => {
  category(router);
  tag(router);
  return router;
};
