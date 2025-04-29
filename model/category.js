const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }
}, { timestamps: true });

// Cascading delete
categorySchema.pre('deleteOne', { document: true, query: false }, async function(next) {
    try {
      await SubCategory.deleteMany({ category: this._id });
      next();
    } catch (err) {
      next(err);
    }
});

module.exports = mongoose.model('Category', categorySchema);
