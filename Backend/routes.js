const express = require('express');
const router = express.Router();
const User = require('./models/user');
const Property = require('./models/property');
const Interest = require('./models/interest');

// User registration
router.post('/register', (req, res) => {
  const { firstName, lastName, email, phoneNumber, role } = req.body;
  const newUser = new User({ firstName, lastName, email, phoneNumber, role });
  newUser.save((err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(user);
  });
});

// Add a property
router.post('/properties', (req, res) => {
  const { owner_id, title, description, price, location } = req.body;
  const newProperty = new Property({ owner_id, title, description, price, location });
  newProperty.save((err, property) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(property);
  });
});

// Get all properties
router.get('/properties', (req, res) => {
  Property.find({}, (err, properties) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ properties });
  });
});

// Express interest in a property
router.post('/interests', (req, res) => {
  const { property_id, buyer_id } = req.body;
  const newInterest = new Interest({ property_id, buyer_id });
  newInterest.save((err, interest) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(interest);
  });
});

// Get owner details by property ID
router.get('/property-owner/:id', (req, res) => {
  const property_id = req.params.id;
  Property.findById(property_id).populate('owner_id').exec((err, property) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json(property.owner_id);
  });
});

module.exports = router;
