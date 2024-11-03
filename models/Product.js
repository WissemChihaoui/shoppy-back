const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ParentCategory' },
    fournisseur: { type: mongoose.Schema.Types.ObjectId, ref: 'Fournisseur' },
    images: [{ type: String }], // Array of image URLs
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
