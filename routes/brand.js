const express = require('express');
const router = express.Router();
const Brand = require('../model/brand');
const Product = require('../model/product');
const asyncHandler = require('express-async-handler');
const brandController = require("../controller/brand")
// Get all brands

router.get('/', brandController.getAllBrand);

// Get a brand by ID
router.get('/:id', brandController.getById);

// Create a new brand
router.post('/', brandController.createNew);

// Update a brand
router.put('/:id', brandController.updateById);

// Delete a brand
router.delete('/:id', brandController.deleteById);


module.exports = router;
