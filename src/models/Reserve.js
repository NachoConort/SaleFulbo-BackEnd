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
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    footballType: {
        type: String,
        required: true
    }
});

module.exports = model('Reserve', reserveSchema);
module.exports = reserveSchema;