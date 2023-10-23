import express from "express";

import {
  getAllTags,
  deleteTag,
  updateTag,
  addTag,
} from "../controllers/tag.controller";
import isAuthenticated from "../middleware/isAuthenticated";

export default (router: express.Router) => {
  router.get("/tags", getAllTags);
  router.post("/tag", isAuthenticated, addTag);
  router.delete("/tag/:id", isAuthenticated, deleteTag);
  router.patch("/tag/:id", isAuthenticated, updateTag);
};
