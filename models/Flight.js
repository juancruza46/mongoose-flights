const mongoose = require('mongoose');
//new destination
const destinationSchema = require('./destination');

const airlineEnum =  ['American', 'Southwest', 'United'];
const airportEnum = ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'];

//new flight schema
const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: airlineEnum,
        required: true,
      },
      airport: {
        type: String,
        enum: airportEnum,
        default: 'DEN',
      },
      flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
      },
      departs: {
        type: Date,
        default: () => new Date().setFullYear(new Date().getFullYear() + 1),
      },
      //new dest property
      destinations: {
        type: [destinationSchema],
        default: [],
      },
    });


const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;