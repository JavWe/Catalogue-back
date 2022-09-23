const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BrandSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
}
);

module.exports = BrandSchema