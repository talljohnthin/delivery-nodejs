import express from "express";
import asyncMiddleware from "../controllers/async.controller";
import {
  uploadSingleImage,
  deleteSingleImage,
} from "../controllers/image.controller";
import upload from "../middleware/multer";

export default (router: express.Router) => {
  router.post(
    "/upload-image",
    upload.single("image"),
    asyncMiddleware(uploadSingleImage)
  );
  router.post("/delete-image/:id", asyncMiddleware(deleteSingleImage));
};
