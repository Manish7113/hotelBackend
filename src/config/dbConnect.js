// src/config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  const url = 'mongodb://localhost:27017/'
  
  try {
    const connectDB = await mongoose.connect(url);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.log('not found')
    process.exit(1);
  }
};

module.exports = connectDB;
