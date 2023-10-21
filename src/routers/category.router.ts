/**
 * @swagger
 * components:
 *   schemas:
 *     Categories:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the category
 *         title:
 *           type: string
 *           description: The title of your category
 *         description:
 *           type: string
 *           description: The category explanation
 *         published:
 *           type: boolean
 *           description: Whether you have finished reading the category
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the category was added
 *
 */

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: The Categories managing API
 * /category:
 *   get:
 *     summary: Lists all the Categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: The list of the Categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categories'
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categories'
 *     responses:
 *       200:
 *         description: The created category.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categories'
 *       500:
 *         description: Some server error
 * /category/{id}:
 *   get:
 *     summary: Get the category by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     responses:
 *       200:
 *         description: The category response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categories'
 *       404:
 *         description: The category was not found
 *   put:
 *    summary: Update the category by the id
 *    tags: [Categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The category id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Categories'
 *    responses:
 *      200:
 *        description: The category was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Categories'
 *      404:
 *        description: The category was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the category by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *
 *     responses:
 *       200:
 *         description: The category was deleted
 *       404:
 *         description: The category was not found
 */

import express from "express";

import {
  getAllCategories,
  deleteCategory,
  updateCategory,
} from "../controllers/category.controller";

export default (router: express.Router) => {
  // router.get('/users', isAuthenticated, getAllUsers);
  router.get("/categories", getAllCategories);
  router.delete("/category/:id", deleteCategory);
  router.patch("/category/:id", updateCategory);
};
