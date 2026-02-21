const express = require('express');
const app = express();
const port = 5000;
const connectDB = require('./db');

// Connect to MongoDB
connectDB();  


app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/profile', require('./routes/profile'));
app.use('/api/v1/post', require('./routes/post'));
app.use('/api/v1/user', require('./routes/user'));



app.listen(port, () => {  console.log(`Example app listening at http://localhost:${port}`);
});

