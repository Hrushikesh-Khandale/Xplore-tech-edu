const mongoose = require('mongoose');
const express=require('express');
const app = express();
const routes = require('./routes/landing-page');

const mongoDB = 'mongodb://localhost:27017/landing-page-database';

mongoose.connect(mongoDB)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });


app.use('/landing-page', routes);


app.listen(3001, () => {
  console.log('Server listening on port 3000');
});