# Serving Static Html Files In Express

## Step 1: Write code
1. Create a folder
2. Create an html file called `index.html`
3. Add header in the file
```
<h1>This is an HTML file</h1>
```
4. Create a javascript file called `server.js`
5. Add following code
```
const path = require('path')
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.sendFile(__dirname +'/index.html')
})
 
app.listen(3000, ()=>{console.log('server running on http://localhost:3000/')})
```

## Step2: Run code
1. Open terminal in enclosing folder
2. Install required libraries
```
npm install
```
3. Run the file
```
node coreModule.js
```