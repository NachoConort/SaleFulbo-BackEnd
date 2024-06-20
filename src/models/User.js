const { Schema, model } = require('mongoose');
const reserveSchema = require('./Reserve');

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
        type: String,
        required: true
    },
    closeTime: {
        type: String,
        required: true
    },
    pricing: {
        type: Number,
        required: true
    },
    reserves: {
        type: [reserveSchema],
        default: []
    }
});

module.exports = model('User', userSchema);