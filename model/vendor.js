const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['admin', 'staff'], default: 'staff' },
  area: { type: mongoose.Schema.Types.ObjectId, ref: 'Area' },
  verified: {type: Boolean,default:false},
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  location: { 
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true } // [longitude, latitude]
  },
  createdAt: { type: Date, default: Date.now }
});

// Very Important: Create a Geospatial Index
vendorSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Vendor', vendorSchema);


// const Vendor = require('../models/Vendor');

// async function findNearestVendor(req, res) {
//   const { latitude, longitude } = req.query; // client sends lat, lng

//   if (!latitude || !longitude) {
//     return res.status(400).json({ message: 'Latitude and Longitude are required' });
//   }

//   const nearestVendor = await Vendor.findOne({
//     location: {
//       $near: {
//         $geometry: {
//           type: "Point",
//           coordinates: [parseFloat(longitude), parseFloat(latitude)]
//         },
//         $maxDistance: 5000 // 5km radius
//       }
//     }
//   });

//   if (!nearestVendor) {
//     return res.status(404).json({ message: 'No nearby vendor found' });
//   }

//   res.json(nearestVendor);
// }