const mongoose = require('mongoose');
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
  console.log("hello word")
})
 
app.listen(8080)