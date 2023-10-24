import express from "express";
import {
  uploadSingleImage,
  deleteSingleImage,
} from "../controllers/image.controller";
import upload from "../middleware/multer";

export default (router: express.Router) => {
  router.post("/upload-image", upload.single("image"), uploadSingleImage);
  router.post("/delete-image/:id", deleteSingleImage);
};
