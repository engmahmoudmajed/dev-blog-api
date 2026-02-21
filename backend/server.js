const express = require('express');
const app = express();
const port = 5000;
const connectDB = require('./db');

// Connect to MongoDB
connectDB();  

// Init Middleware
app.use(express.json({ extended: false })); 

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/profile', require('./routes/profile'));
app.use('/api/v1/post', require('./routes/post'));
app.use('/api/v1/user', require('./routes/user'));

// Global error handler (must be after all routes)
app.use((err, req, res, next) => {
  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    error: true,
    message: err.message || 'Internal Server Error',
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});