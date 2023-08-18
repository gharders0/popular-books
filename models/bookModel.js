const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'Please add the book name'],
    },
    author: {
      type: String,
      required: [true, 'Please add the author name'],
    },
    yearPublished: {
      type: Number,
      required: [true, 'Please add the year published'],
    },
    genre: {
      type: String,
      required: [true, 'Please add the genre'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Book', bookSchema);
