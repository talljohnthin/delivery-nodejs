import express from "express";
import cloudinary from "../utils/cloudinary";

export const uploadSingleImage = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please add a image",
      });
    }

    cloudinary.uploader.upload(req.file.path, function (err, result) {
      if (err || !result) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Error on uploading image to the storage",
        });
      }

      const { public_id, url } = result;

      res.status(200).json({ public_id, url });
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteSingleImage = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  cloudinary.uploader.destroy(id, (error: Error | undefined, result: any) => {
    if (error) {
      res.status(500).json({
        error: true,
        message: "Error deleting image:" + error,
      });
    } else {
      res.status(200).json({
        error: false,
        message: "Image sucessfully deleted!",
      });
    }
  });
};
