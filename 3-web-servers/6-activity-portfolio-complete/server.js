const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

//view engine setup
app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')

app.get('/', function (req, res) {

  var about = {
    firstName: 'Nora',
    lastName:'AlNashwan',
    bio: 'I have served as a developer, evangelist, entrepreneur and consultant in the technology industry. I enjoy solving complex technical problems, and believes in impacting world through technology.',
    city: 'Riyadh',
    phone: '054-111-1101',
    university: 'Alimam university',
    degree: 'Bachelor of Computer Science',
  }

  var abilities = {
    text: 'I have a stellar record of rising to challenges. Acknowledged for diligent work ethic and pragmatic approach to solving problems. Passionate in cutting-edge technologies and motivated to empower people.',
    skills: [
      { title: "Blockchain", years: "2", percent: "95"},
      { title: "Cloud Computing", years: "3", percent: "93"},
      { title: "Nodejs", years: "2", percent: "90"},
      { title: "Project Management", years: "1", percent: "85"}
    ]
}

var projects = [
  {title: "Qased Application", category: "Development", image: "1.png"},
  {title: "Tayseer Quran Memorization Tool", category: "Development", image: "2.png"},
  {title: "Career Training Website", category: "Design", image: "3.jpg"},
  {title: "Branding", category: "Design", image: "4.jpg"},
  {title: "Cup packaging", category: "Design", image: "5.jpg"},
  {title: "Brochure", category: "Design", image: "6.jpg"}
]

var contact = {
  email: "nora@codeforgirls.org"
}

var social = [
  {title: "twitter", link: "http://twitter.com/xnorax"},
  {title: "linkedin", link: "https://www.linkedin.com/in/xnorax/"}
]

  res.render('index', {
    about: about,
    abilities: abilities,
    projects: projects,
    contact: contact,
    social:social
    });
});

app.listen(3000, () => { console.log('server running on http://localhost:3000/') })