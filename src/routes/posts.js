const express = require('express');

const router = express.Router();


router.get('/posts', (req, res) => {
  res.send("WE are at posts")
})


module.exports = router;