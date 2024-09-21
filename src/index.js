// src/app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/dbConnect');
// const userRoutes = require('./routes/userRoutes');
// const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Body parser
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // HTTP request logger

// Routes
// app.use('/api/users', userRoutes);


// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
