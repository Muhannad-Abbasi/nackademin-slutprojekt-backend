const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    price: Number,
    shortDesc:String,
    longDesc:String,
    imgFile:String,
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;




