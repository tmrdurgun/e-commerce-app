const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = new Schema({
  id: { type: String },
  title: { type: String },
  description: { type: String },
  link: { type: String },
  image_link: { type: String },
  availability: { type: String },
  price: { type: String },
  brand: { type: String },
  gtin: { type: String },
  mpn: { type: String },
  condition: { type: String },
  shipping: { type: String },
  identifier_exists: { type: String },
  google_product_category: { type: String },
  adult: { type: String },
  gender: { type: String },
  color: { type: String },
});

module.exports = mongoose.model('products', productsSchema);