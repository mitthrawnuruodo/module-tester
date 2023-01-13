Module Tester

Test repo for the Module Demo in class, adding vite to main, vanilla project and deploying to Netlify (and later GitHub Pages...?)

Netlify: [https://keen-mooncake-369800.netlify.app/](https://keen-mooncake-369800.netlify.app/)

---

Reduce .gitignore to (or add gitignore if not precent)

```
# Dependency directories
node_modules/

```

Initialize: `npm init -y`

`npm i vite`

Add scripts to package.json: 

```js
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", 
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
```

Build: `npm run build`

Add style css-file:

```css
div#amiibos {
    display: grid; 
    grid-template-columns: auto auto auto auto; 
    margin-top: 20px;
    background-color: #eefaee;
}
```

And remove from html: 

```html
    <div id="amiibos"></div>
```

Re-build...

---

// Base GH pages on:
https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane#comment-22iei

`npm install gh-pages --save-dev`