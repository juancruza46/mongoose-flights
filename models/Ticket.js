const mongoose = require('mongoose');

//Part 3 lab add - ticketSchema
const ticketSchema = new mongoose.Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/,
        required: true
      },
      price: {
        type: Number,
        min: 0,
        required: true
      },
      flight: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true
      }


});

//ticket model
const Ticket =mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
