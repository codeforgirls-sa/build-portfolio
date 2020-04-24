const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

app.get('/help', function (req, res) {
  res.send({'question':'How can we help you?'})
})
 
app.listen(3000, ()=>{console.log('server running on http://localhost:3000/')})