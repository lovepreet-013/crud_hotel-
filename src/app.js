const express = require('express');

const app = express();

//ROUTES
app.get('/', (req, res) => {
  res.send("WE are at home")
})

app.get('/posts', (req, res) => {
  res.send("WE are at posts")
})

//SERVER LISTEN

app.listen(3000);