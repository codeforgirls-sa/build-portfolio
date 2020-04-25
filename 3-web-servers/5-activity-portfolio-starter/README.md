# Building your portfolio

## Step 1: Add your images
- Go to `public/img/hero` and replace it with your logo image
- Go to `public/img/about` and replace it with your portrait image
- Go to `public/img/portfolio` and replace it with photos of your latest 6 projects

## Step 2: Edit code

### In `init.js` file
- Go to `public/js/init.js` and replace those titles with yours
```
strings: ["App Developer", "Developer Advocate", "Consultant"]
```

### In `server.js` file
- Edit about values
- Follow the comments in the file to add your skills, projects, email and social media links

## Step 3: Edit view
You need to modify:
- *LEFTPART* section to include your social media accounts
- *SKILLS* section to include your skills
- *PORTFOLIO* section to include your projects
from the response you sent in `server.js` file

## Step 4:  Edit style
- You can change background from the *RIGHTPART* section by changing *data-img-url* value in this line
```
<div class="overlay_image hero jarallax" data-img-url="https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1561&q=80" data-speed="0.1">
									
```
- Feel free to change the primary and secondary colors by replacing `#967aa0` and `#353134` in `public/css/style.css` file

