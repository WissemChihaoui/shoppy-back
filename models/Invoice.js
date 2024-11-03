const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    command: { type: mongoose.Schema.Types.ObjectId, ref: 'Command', required: true },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['Paid', 'Unpaid', 'Cancelled'], default: 'Unpaid' },
    issuedAt: { type: Date, default: Date.now },
    dueDate: { type: Date }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
