import express from "express";

import {
  getAllTags,
  deleteTag,
  updateTag,
  addTag, getTagsById,
} from "../controllers/tag.controller";
import isAuthenticated from "../middleware/isAuthenticated";
import asyncMiddleware from "../controllers/async.controller";

export default (router: express.Router) => {
  router.get("/tags", asyncMiddleware(getAllTags));
  router.get("/tags/:id", asyncMiddleware(getTagsById));
  router.post("/tag/create", asyncMiddleware(addTag));
  router.delete("/tag/:id", asyncMiddleware(deleteTag));
  router.patch("/tags/edit/:id", asyncMiddleware(updateTag));
};
