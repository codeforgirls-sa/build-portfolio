const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/contact', function (req, res) {
  res.send('Contact us')
})

app.get('/help', function (req, res) {
  res.send('How can we help you?')
})
 
app.listen(3000, ()=>{console.log('server running on http://localhost:3000/')})