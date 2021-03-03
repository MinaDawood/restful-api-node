const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middlewares

// Routes
app.get('/', (req, res) => {});

// Connect to DB
mongoose.connect(
  'mongodb+srv://mina:l0zirpbhmjccUgq6@cluster0.uigt3.mongodb.net/restful-api-node?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  },
  () => {
    console.log('Connected To MongoDB');
  }
);

// Listening
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
