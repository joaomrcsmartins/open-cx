const mongoose = require('mongoose');

const talkSchema = mongoose.Schema({
  talkName: {
    type: String,
    required: true
  },
  speaker : {
    type: String,
    required: true
  },
  poiId: {
    type: Number,
    required: true
  },
  room: {
    type: String,
    required: true
  },
  initial_time: {
    type: Date,
    required: true
  },
  final_time: {
    type: Date,
    required: true
  },
  description: {
    type: String
  },
  tags: {
    type: [String]
  }
});

module.exports = talk = mongoose.model('Talk', talkSchema);
