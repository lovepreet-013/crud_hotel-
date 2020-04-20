const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.send("WE are at posts")
})


module.exports = router;