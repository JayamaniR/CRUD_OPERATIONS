const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.model');

const app = express();

const userRoute=require('./routes/user.routes');
const dotenv=require('dotenv');
dotenv.config();
app.use(express.json());



// Test route
app.get('/testapi', (req, res) => {
  res.send('User API is working!');
});

app.listen(3000)

//routes
app.use('/api/users',userRoute);



// MongoDB connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log('Connected!'))
  .catch((error) => console.log('Connection error:',error));