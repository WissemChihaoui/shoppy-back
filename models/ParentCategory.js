const mongoose = require('mongoose');

const parentCategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ParentCategory', parentCategorySchema);
