import express from "express";

import {
  getAllTags,
  deleteTag,
  updateTag,
  addTag,
} from "../controllers/tag.controller";

export default (router: express.Router) => {
  // router.get('/users', isAuthenticated, getAllUsers);
  router.get("/tags", getAllTags);
  router.post("/tag", addTag);
  router.delete("/tag/:id", deleteTag);
  router.patch("/tag/:id", updateTag);
};
