# Module Tester

Test repo for the Module Demo in class, adding Webpack to main, vanilla project, and deploying to Netlify.

Deployed to [https://harmonious-salmiakki-1b6627.netlify.app/](https://harmonious-salmiakki-1b6627.netlify.app/)

---

Process for adding Webpack:

Make sure you have node_modules ignored, BUT remove dist, basically just reduce the .gitignore to:

```
# Dependency directories
node_modules/
```

`npm init -y`

`npm install webpack webpack-cli --save-dev`

`npm install --save-dev html-webpack-plugin`

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
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: './index.js',
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html',
        filename: './index.html'
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

Remove script tag from the template html-file: ./index.html 

@todo: NEEED to find a solution to this...

`npm run build`

Set up Netlify:

Use githup-repo: ...
Branch to deploy: `webpack`
Publish directory: `dist/`

Add CSS from css-file:

Make ./style.css: 

```css
div#amiibos {
    display: grid; 
    grid-template-columns: auto auto auto auto; 
    margin-top: 20px;
    background-color: #faeeee;
}
```
and remove the style-tag from the index.html-file: 

```html
    <div id="amiibos"></div>
```

`npm install --save-dev style-loader css-loader`

Add module to webpack.config: 

```js
  output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

Add the css-file to the (top of) the _javascript_ file index.js: 

```js
import "./style.css"
```

The CSS will be injected from JS.

Like the script file, the linked CSS in the template file needs to be removed (ie. commented out) when building:

```html
    <!--<script type="module" src="./index.js" defer></script>
    <link rel="stylesheet" href="./style.css">-->
```

@todo: REALLY need to find a better soluting, not involving lodash...
