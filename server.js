const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

//Connect DB
connectDB();

app.get('/', (req, res) => {
  res.send('API Running');
});

//Define Routes
app.use('/api/Todos', require('./routes/api/Todos'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
