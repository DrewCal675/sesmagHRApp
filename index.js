// index.js

const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const userRoutes = require('./routes/users');

dotenv.config();

const app = express(); // ✅ Make sure this is declared BEFORE using 'app'

// Middlewares
app.use(express.json());
app.use(logger); // ✅ Safe here

// Routes
app.use('/users', userRoutes);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('HR Web App is running!');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
