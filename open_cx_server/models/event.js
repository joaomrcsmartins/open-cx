const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
    locationID: {
      type: Number,
      required: true
    },
  room: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

module.exports = event = mongoose.model('Event', eventSchema);
