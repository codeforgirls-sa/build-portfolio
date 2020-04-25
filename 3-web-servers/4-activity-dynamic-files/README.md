# Serving Dynamic Pages In Express

Start working from the previous activity, then follow below steps:

## Step 1: Initializing
- Install *hbs* package
```
npm install hbs
```

# Step 2: HTML Templating
- create a folder named `views`
- Move *index.html* file to *views* folder
- Rename *index.html* to *index.hbs*
- Inside *index.hbs* edit body as following
```
<h1>Hi, I'm {{name}}</h1>
```

# Step 3: Server side
- Import *hbs* package on top of the file
```
const hbs = require('hbs');
```

- Add view engine setup before *app.get()* function
```
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
```

- Change response to render index file with your name
```
res.render('index', {
    name: 'Nora AlNashwan'
  });
});
```

## Step 4: Run It
- Run the file
```
node server.js
```

Congrats 🎉 Play with the response and index file to include more information about you such as city, phone, email, bio and skills.