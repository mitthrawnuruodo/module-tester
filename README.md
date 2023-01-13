# Module Tester

Test repo for the Module Demo in class

---

Add Webpack:

Make sure you have node_modules ignored, BUT remove dist, basically just reduce the .gitignore to:

```
# Dependency directories
node_modules/

```

npm init -y

npm install webpack webpack-cli --save-dev

npm install --save-dev html-webpack-plugin

Add build to package.json:

```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", 
    "build": "webpack"
  },
```

Make webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```