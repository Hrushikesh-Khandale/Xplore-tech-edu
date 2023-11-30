const mongoose = require('mongoose');
const express=require('express');
const router = express.Router();
const routes = require('./routes/landing-page');

const mongoDB = 'mongodb://localhost:27017/landing-page-database';
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(mongoDB, connectionOptions, (err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB');
  }
});



router.use('/landing-page', routes);


router.listen(3000, () => {
  console.log('Server listening on port 3000');
});