const mongoose=require('mongoose');


const mongoDB = 'mongodb://localhost:27017/my-landing-page-database';
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};


mongoose.connect(mongoDB, connectionOptions, () => {
    console.log('Connected to MongoDB');
  });
  