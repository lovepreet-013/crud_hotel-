const express = require('express');

const router = express.Router();


app.get('/posts', (req, res) => {
  res.send("WE are at posts")
})


module.exports = router;