const express = require('express');

const app = express();

const mongoose = require('mongoose');

require('dotenv/config');

//ROUTES
app.get('/', (req, res) => {
  res.send("WE are at home")
})

app.get('/posts', (req, res) => {
  res.send("WE are at posts")
})

//CONNECT TO DB

mongoose.connect(process.env.DB_CONNECTION, () => 
  console.log('Connected to DB....')
  );

//SERVER LISTEN

app.listen(3000);