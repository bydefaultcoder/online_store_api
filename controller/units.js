const express = require('express');
const router = express.Router();
const Product = require('../model/unit');
const multer = require('multer');
const { uploadProduct } = require('../uploadFile');
const asyncHandler = require('express-async-handler');
// controllers/unitController.js
const {unitValidationSchema}  = require("../validators/unitValidator")

const Unit = require("../model/unit"); // adjust the path if needed

// CREATE a Unit
exports.createUnit =asyncHandler( async (req, res) => {
  const { error, value } = unitValidationSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const messages = error.details.map((err) => err.message);
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: messages,
    });
  }
  try {

    if (value.base_unit) {
        const baseUnitExists = await Unit.findById(value.base_unit);
        if (!baseUnitExists) {
            return res.status(400).json({ success: false, message: 'Base unit not found', data: null });
        }

        // Optional: Check if types match
        if (baseUnitExists.type !== value.type) {
            return res.status(400).json({ success: false, message: 'Base unit type must match', data: null });
        }
        }
    const unit = new Unit(value);
    await unit.save();
    res.status(201).json(unit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ all Units
exports.getAllUnits = asyncHandler(async (req, res) => {
  try {
    const units = await Unit.find();
    res.status(200).json(units);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ single Unit by ID
exports.getUnitById = asyncHandler( async (req, res) => {
  try {
    const unit = await Unit.findById(req.params.id);
    if (!unit) {
      return res.status(404).json({ error: 'Unit not found' });
    }
    res.status(200).json(unit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE Unit by ID
exports.updateUnit = asyncHandler(async (req, res) => {
  try {
    const unit = await Unit.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!unit) {
      return res.status(404).json({ error: 'Unit not found' });
    }
    res.status(200).json(unit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE Unit by ID
exports.deleteUnit = asyncHandler(async (req, res) => {
  try {
    const unit = await Unit.findByIdAndDelete(req.params.id);
    if (!unit) {
      return res.status(404).json({ error: 'Unit not found' });
    }
    res.status(200).json({ message: 'Unit deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


