# Serving Dynamic Pages In Express

## Step 1: Write server code
1. Create a folder
2. Create a javascript file called `server.js`
3. Add following code
```
const express = require('express');
const path = require('path');
const app = express();

//view engine setup
app.set("views", path.join(__dirname, "views")); //setting views directory for views.
app.set("view engine", "hbs"); //setting view engine as handlebars

app.get('/', function (req, res) {
  res.render('index', {
    name: 'Nora AlNashwan',
    city: 'Riyadh',
    phone: '054-111-1101',
    email: 'nora@codeforgirls.org',
    bio: 'Nora has served as a developer, evangelist, entrepreneur and consultant in the technology industry. \nShe enjoys solving complex technical problems, and believes in impacting world through technology.'
  });
});

app.listen(3000, ()=>{console.log('server running on http://localhost:3000/')})
```

## Step 2: Write view code
1. Create views folder
2. Create a file named `index.hbs`
3. Add following code inside body
```
<section>
    <div>
        <h1>{{name}}</h1>
        <div>{{city}} · {{phone}} ·
          <a href="mailto:{{email}}">{{email}}</a>
        </div>
        <p>{{bio}}</p>
    </div>
</section>
```

## Step2: Run code
1. Open terminal in enclosing folder
2. Install required libraries
```
npm install
```
3. Run the file
```
node server.js
```