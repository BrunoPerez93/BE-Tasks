// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authController = require('./controllers/authController');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
app.use(express.json());

// Auth Routes
app.post('/api/register', authController.register);
app.post('/api/login', authController.login);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
