const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  role: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
