import express from "express";

import {
  getAllTags,
  deleteTag,
  updateTag,
  addTag,
} from "../controllers/tag.controller";
import isAuthenticated from "../middleware/isAuthenticated";
import asyncMiddleware from "../controllers/async.controller";

export default (router: express.Router) => {
  router.get("/tags", asyncMiddleware(getAllTags));
  router.post("/tag", asyncMiddleware(addTag));
  router.delete("/tag/:id", asyncMiddleware(deleteTag));
  router.patch("/tag/:id", asyncMiddleware(updateTag));
};
