Module Tester

Test repo for the Module Demo in class, adding vite to main, vanilla project and deploying to GirHub Pages (or, that's the plan)

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


---

`npm install gh-pages --save-dev`