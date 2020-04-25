const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

//view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get('/', function (req, res) {

  var about = {
    firstName: 'Nora',
    lastName: 'AlNashwan',
    bio: 'I have served as a developer, evangelist, entrepreneur and consultant in the technology industry. I enjoy solving complex technical problems, and believes in impacting world through technology.',
    city: 'Riyadh',
    phone: '054-111-1101',
    university: 'Alimam university',
    degree: 'Bachelor of Computer Science',
  }

  /* Add 
  1- text about your skills
  2- your skills including skill name, number of years of experience and percent of proficiency
  */
  var abilities;

  /* Add your projects including:
  project name, category and image name
  */
  var projects;

  /* Add your email */
  var contact;

  /* Add your social links including:
  app name (i.e., linkedin) and your linl
  */
  var social;

  /* Add previous variables to the response
    abilities: abilities,
    projects: projects,
    contact: contact,
    social:social
  */
  res.render('index', {
    about: about,
  });
});

app.listen(3000, () => { console.log('server running on http://localhost:3000/') })