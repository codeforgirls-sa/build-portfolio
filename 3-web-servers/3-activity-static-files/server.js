const path = require('path')
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.sendFile(__dirname +'/index.html')
})
 
app.listen(3000, ()=>{console.log('server running on http://localhost:3000/')})