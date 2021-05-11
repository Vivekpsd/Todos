const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
app.use(express.json());

//Connect DB
connectDB();

//Define Routes
app.use('/api/Todos', require('./routes/api/Todos'));

// Serve Static Assets for Procuction

if (process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
