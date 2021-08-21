const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, { timestamps: true });