// config.js

// Load environment variables from .env file
require('dotenv').config();

// Export the necessary variables
module.exports = {
  port: process.env.PORT || 3000,
  DB_HOST : process.env.DB_HOST || 5000,
  
};
