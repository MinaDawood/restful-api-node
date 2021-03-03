const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const postsRoute = require('./routes/posts');

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/posts', postsRoute);

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Connected To MongoDB');
  }
);

// Listening
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
