const mongoose = require('mongoose');
const express=require('express');
const app = express();
const PORT= 8000;
const cors=require('cors');

const mongoDB = 'mongodb://localhost:27017/landing-page-database';

mongoose.connect(mongoDB)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });


app.use(express.json()); // parse requests of content type - application/json
app.use(cors());       // enable CORS for all domains 


app.use('/landing-page', require('./routes/landing-page'));


app.listen(PORT, () => {
  console.log(`'Server listening on port http://localhost:${PORT}`);
});