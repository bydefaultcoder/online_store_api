const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Area', areaSchema);