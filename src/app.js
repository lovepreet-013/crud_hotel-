const express = require('express');

const app = express();

const mongoose = require('mongoose');

require('dotenv/config');

//IMPORT ROUTES
const postsRoute = require('./routes/posts.js')

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
  res.send("WE are at home")
})


//CONNECT TO DB

mongoose.connect(process.env.DB_CONNECTION, () => 
  console.log('Connected to DB....')
  );

//SERVER LISTEN

app.listen(3000);