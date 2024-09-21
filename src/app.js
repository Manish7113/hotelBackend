// src/app.js
const express = require('express');

const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/dbConnect');
const dotenv = require('dotenv')
const Routes = require('./routes/user')



const config = require('./config/config');

// Use the config values
const port = config.DB_HOST;
  
 

// Load environment variables
dotenv.config();

console.log('process the env file ' , process.env.DB_HOST)

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Body parser
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // HTTP request logger

// Routes
app.use('/user', Routes);


// Error Handling Middleware
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
 
});
