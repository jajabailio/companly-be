const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum : ['Owner', 'Admin', 'Support', 'Tech'],
    },
    Company_id: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: 'companies',
        requried: true
    }
}, { timestamps: true });