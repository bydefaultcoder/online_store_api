const express = require('express');
const router = express.Router();
const SubCategory = require('../model/subCategory');
const Brand = require('../model/brand');
const Product = require('../model/product');
const asyncHandler = require('express-async-handler');
const subCategController = require("../controller/subCategory")


/**
 * @swagger
 * /subCategories:
 *   get:
 *     summary: Get all subCategories
 *     tags: [subCategories]
 *     responses:
 *       200:
 *         description: List of subCategories
 */
router.get('/', subCategController.getAllSubCategory);

/**
 * @swagger
 * /subCategories:
 *   get:
 *     summary: Get subCategory
 *     tags: [subCategories]
 *     responses:
 *       200:
 *         description: List of subCategories
 */
router.get('/:id', subCategController.SubCategoryGetById);

/**
 * @swagger
 * /subCategories:
 *   post:
 *     summary: Create a new SubCategory
 *     tags: [SubCategories]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Fruits"
 *               categoryId:
 *                 type: string
 *                 example: "Vegitable"
 *     responses:
 *       201:
 *         description: SubCategories created
 *       400:
 *         description: Validation error
 */

router.post('/', subCategController.createSubCategory);

/**
 * @swagger
 * /subCategories/{id}:
 *   put:
 *     summary: Update a new SubCategory
 *     tags: [SubCategories]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Fruits"
 *               categoryId:
 *                 type: string
 *                 example: "Vegitable"
 *     responses:
 *       201:
 *         description: SubCategories Updated
 *       400:
 *         description: Validation error
 */
router.put('/:id', subCategController.updateSubCategory);

/**
 * @swagger
 * /subCategories/{id}:
 *   delete:
 *     summary: Delete a category
 *     tags: [subCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: subCategory deleted
 *       404:
 *         description: subCategory not found
 */
router.delete('/:id',subCategController.deleteSubCategory);


module.exports = router;
