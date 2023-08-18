const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide user name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide user email.'],
      unique: [true, 'This email is already registered.'],
    },
    password: {
      type: String,
      required: [true, 'Please provide the user password'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
