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