const mongoose = require('mongoose');
const BrandsSchema = require('./brands.model');


BrandsSchema.statics = {
    create: function (data,cb) {
        const brands = new this(data);
        brands.save(cb);
    },
    login: function (query, cb) {
        this.find(query, cb);
    }
}

const brandsModel = mongoose.model('brands', BrandsSchema);
module.exports = brandsModel;