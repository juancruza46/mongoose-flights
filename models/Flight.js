const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: String,
  flightNumber: String,
  departureAirport: String,
  arrivalAirport: String,
  departureDate: Date,
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;