const mongoose = require('mongoose');

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
    });


const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;