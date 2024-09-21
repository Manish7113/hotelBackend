// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique : true,
      trim : true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false, // Exclude password field when querying
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
