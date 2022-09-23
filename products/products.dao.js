const mongoose = require('mongoose');
const productsSchema = require('./products.model');


productsSchema.statics = {
    create: function (data,cb) {
        const product = new this(data);
        product.save(cb);
    },
    login: function (query, cb) {
        this.find(query, cb);
    }
}

const productModel = mongoose.model('products', productsSchema);
module.exports = productModel;