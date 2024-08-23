const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    total_price_set: {
        shop_money: {
            amount: Number,
            currency_code: String,
        },
    },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
