const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');

const app = express();

app.use(helmet());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/posts', postsRoutes);

// Health check
app.get('/health', (req, res) => res.json({ status: 'OK' }));

// 404 handler
app.use('*', (req, res) => res.status(404).json({ error: 'Route not found' }));

module.exports = app;