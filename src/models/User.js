const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    openTime: {
        type: Date,
        required: true
    },
    closeTime: {
        type: Date,
        required: true
    },
    pricing: {
        type: Number,
        required: true
    }
});

module.exports = model('User', userSchema);