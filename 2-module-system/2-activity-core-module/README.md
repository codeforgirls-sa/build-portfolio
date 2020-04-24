# Custom Module

1. Create a folder
2. Run this command to initialize nodejs project
```
npm init
```
Then click *Enter* if you don't want to change defaults
In our case, we enter `coreModule.js` as entry point
When you finish, you'll see `package.json` file added
3. Create a file named `coreModule.js`
4. In the `coreModule.js` write following code
```
const path = require('path');
console.log(__dirname);
```
5. Open terminal in enclosing folder
6. Install *path* package
```
npm install path
```
You'll see `node_modules` folder, `package-lock.json` file added.
And *path* will be added under dependencies in `package.json` and `package-lock.json` files
7. Run the file
```
node coreModule.js
```