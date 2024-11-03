const mongoose = require('mongoose');

const fournisseurSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactInfo: {
        email: { type: String },
        phone: { type: String },
        address: { type: String }
    },
    description: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Fournisseur', fournisseurSchema);
