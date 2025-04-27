const mongoose = require('mongoose');
const { Schema } = mongoose;

const UnitSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  into_base: {
    type: Number,
    required: true,
    min: [0, 'into_base must be positive'],
    default: 1
  },
  base_unit: {
    type: Schema.Types.ObjectId,
    ref: 'Unit', // Self-referencing Unit
    default: null
  },
  type: {
    type: String,
    required: true,
    enum: ['weight', 'volume', 'count'],
    index: true,
    lowercase: true,
    trim: true
  },
  symbol: {
    type: String,
    trim: true
  },
  is_active: {
    type: Boolean,
    default: true
  },
  description: {
    type: String,
    trim: true
  }
}, { timestamps: true });

// Custom validation before saving
UnitSchema.pre('save', async function(next) {
    if (this.base_unit) {
      const baseUnit = await mongoose.model('Unit').findById(this.base_unit);
      if (!baseUnit) {
        return next(new Error('Base unit not found'));
      }
      if (baseUnit.type !== this.type) {
        return next(new Error('Base unit must be of the same type'));
      }
    }
    next();
  });
  
const Unit = mongoose.model('Unit', UnitSchema);

module.exports = Unit;