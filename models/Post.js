const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  firstName: {
    type: string
  },
  lastName: {
    type: string
  },
  email: {
    type: string
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Posts', PostSchema)