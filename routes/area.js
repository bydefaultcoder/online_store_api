/**
 * @swagger
 * tags:
 *   name: Areas
 *   description: Area management API
 */
const express = require('express');
const router = express.Router();
const { createArea, getAllAreas, updateArea, deleteArea } = require('../controller/area');
// You can add authMiddleware if only admin should create/update/delete areas


/**
 * @swagger
 * /area:
 *   get:
 *     summary: Get list of all areas
 *     tags: [Areas]
 *     responses:
 *       200:
 *         description: List of areas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Area'
 */

/**
 * @swagger
 * /area/{id}:
 *   get:
 *     summary: Get area by ID
 *     tags: [Areas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Area ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Area details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Area'
 */

/**
 * @swagger
 * /area:
 *   post:
 *     summary: Create a new area
 *     tags: [Areas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Area'
 *     responses:
 *       201:
 *         description: Area created successfully
 */

/**
 * @swagger
 * /area/{id}:
 *   put:
 *     summary: Update an area
 *     tags: [Areas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Area ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Area'
 *     responses:
 *       200:
 *         description: Area updated successfully
 */

/**
 * @swagger
 * /area/{id}:
 *   delete:
 *     summary: Delete an area
 *     tags: [Areas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Area ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Area deleted successfully
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Area:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         city:
 *           type: string
 *         state:
 *           type: string
 *         postalCode:
 *           type: string
 *       required:
 *         - name
 *         - city
 *         - state
 */

// Create Area
router.post('/', createArea);

// Get All Areas
router.get('/', getAllAreas);

// Update Area
router.put('/:id', updateArea);

// Delete Area
router.delete('/:id', deleteArea);

module.exports = router;
