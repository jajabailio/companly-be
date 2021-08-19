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
    },
    ownedBy: {
        type: String,
        required: true
    },
    // User_id: {
    //     type: mongoose.SchemaType.ObjectId,
    //     refs: 'User'
    // }
}, { timestamps: true });