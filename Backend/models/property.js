const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  price: Number,
  location: String
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
