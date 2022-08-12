const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  image01: String,
  image02: String,
  image03: String,
  category: String,
  desc: String,
});

module.exports = mongoose.model('Product', productSchema);
