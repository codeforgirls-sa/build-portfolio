# Serving Static Html Files In Express

## Step 1: Initialize project
1. Create a folder
2. Initialize project
```
npm init
```
We write `server.js` as entry point
3. Install `express` and `nodemon` packages
```
npm install express
npm install nodemon
```
4. Add this script inside *scripts* in `package.json` file
```
"start": "nodemon server.js"
```

So your `package.json` should look like this:
```
{
  "name": "workshop",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js" 
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.3"
  }
}
```

## Step 2: Write html code
1. Create an html file called `index.html`
2. Add header in the file
```
<h1>This is an HTML file</h1>
```

## Step 3: Write javascript code
1. Create a javascript file called `server.js`
2. Copy code from [express package doc](https://www.npmjs.com/package/express)
```
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
```
3. change response to send html file
```
res.sendFile(__dirname +'/index.html')
```
4. Add callback for easier access to website link
```
app.listen(3000, ()=>{console.log('server running on http://localhost:3000/')})
```

## Step 4: Run code
1. Open terminal in enclosing folder
2. Run the file
```
node server.js
```