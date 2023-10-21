import express from "express";
import category from "./category.router";

const router = express.Router();

export default (): express.Router => {
  category(router);
  return router;
};
