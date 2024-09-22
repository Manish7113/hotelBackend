// src/index.js
const dotenv = require('dotenv');
const connectDB = require('./config/dbConnect');
const config = require('./config/config');
const app = require('./app');

// Load environment variables from .env
dotenv.config();

// Connect to MongoDB
connectDB();

// Use the config values
const PORT = process.env.PORT || config.DB_HOST || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
