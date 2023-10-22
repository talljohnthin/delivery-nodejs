import express from "express";

import {
  createTag,
  deleteTagById,
  getTags,
  getTagById,
  updateTagById,
} from "../services/tag.services";

export const getAllTags = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const tags = await getTags();

    return res.status(200).json(tags);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const addTag = async (req: express.Request, res: express.Response) => {
  try {
    const tag = await createTag(req.body);
    return res.json(tag);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteTag = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedTag = await deleteTagById(id);

    return res.json(deletedTag);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateTag = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    if (!title) {
      return res.sendStatus(400);
    }

    await updateTagById(id, req.body);

    const tag = await getTagById(id);

    return res.status(200).json(tag).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
