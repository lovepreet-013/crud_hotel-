const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  firstName: {
    type: string,
    required: true
  },
  lastName: {
    type: string,
    required: true
  },
  email: {
    type: string,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Posts', PostSchema)