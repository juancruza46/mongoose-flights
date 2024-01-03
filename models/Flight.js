const mongoose = require('mongoose');

// Define destinationSchema
const destinationSchema = new mongoose.Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    required: true
  },
  arrival: {
    type: Date,
    required: true
  }
});

// Define Flight Schema
const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  airport: {
    type: String,
    required: true
  },
  departs: {
    type: Date,
    required: true
  },
  destinations: {
    type: [destinationSchema], // Array of destinationSchema
    required: true
  }
});


// Define Flight Model
const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;