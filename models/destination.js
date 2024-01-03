//new file for destinations (part two lab)

//declare mongoose
const mongoose = require('mongoose');

//new mongoose schema
const destinationSchema = new mongoose.Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        required: true,
    },
    arrival: {
        type: Date,
        required: true,
      },

});

//export
module.exports = destinationSchema;