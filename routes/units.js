const express = require('express');
const router = express.Router();
// const Product = require('../model/unit');
// const multer = require('multer');
// const { uploadProduct } = require('../uploadFile');
// const asyncHandler = require('express-async-handler');
// controllers/unitController.js

const unitController = require("../controller/units")


// CRUD Routes
/**
 * @swagger
 * /units:
 *   post:
 *     summary: Create a new unit
 *     tags: [Units]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               into_base:
 *                 type: number
 *               base_unit:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [weight, volume, count]
 *               symbol:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Unit created successfully
 */
router.post('/', unitController.createUnit);

/**
 * @swagger
 * /units:
 *   get:
 *     summary: Get all units
 *     tags: [Units]
 *     responses:
 *       200:
 *         description: List of units
 */
router.get('/', unitController.getAllUnits);

/**
 * @swagger
 * /units/{id}:
 *   get:
 *     summary: Get unit by ID
 *     tags: [Units]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unit ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Single unit found
 */

router.get('/:id', unitController.getUnitById);

/**
 * @swagger
 * /units/{id}:
 *   put:
 *     summary: Update a unit by ID
 *     tags: [Units]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unit ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put('/:id', unitController.updateUnit);

/**
 * @swagger
 * /units/{id}:
 *   delete:
 *     summary: Delete a unit by ID
 *     tags: [Units]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unit ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted successfully
 */
router.delete('/:id', unitController.deleteUnit);

module.exports = router;