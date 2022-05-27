const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const brandSchema = ({
    name: String,
    description: String
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;