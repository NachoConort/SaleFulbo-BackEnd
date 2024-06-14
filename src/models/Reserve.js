const { Schema, model } = require('mongoose');

const reserveSchema = new Schema ({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    futbol: {
        type: Number,
        required: true
    },
    
});

module.exports = model('Reserve', reserveSchema);