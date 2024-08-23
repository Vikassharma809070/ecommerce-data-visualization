const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    email: String,
    created_at: { type: Date, default: Date.now },
    default_address: {
        city: String,
    },
});

module.exports = mongoose.model('Customer', customerSchema);
