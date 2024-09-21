// src/config/db.js
const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    const connectDB = await mongoose.connect(process.env.DB_HOST);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.log('not found')
    process.exit(1);
  }
};

module.exports = connectDB;
