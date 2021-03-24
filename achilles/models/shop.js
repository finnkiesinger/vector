const mongoose = require("mongoose");

const ShopSchema = mongoose.Schema({
    title: String,
    handle: String,
});

const Shop = mongoose.model("Shop", ShopSchema);

module.exports = Shop;