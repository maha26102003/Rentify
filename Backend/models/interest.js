const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
  property_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  buyer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Interest = mongoose.model('Interest', interestSchema);

module.exports = Interest;
