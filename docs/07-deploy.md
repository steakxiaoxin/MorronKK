### 部署到 Github Page

1. npm i -D gh-pages
2. add script in package.json
3. add homepage in package.json

```json
// package.json
"scripts": {
	"predeploy": "npm run build",
	"deploy": "gh-pages -d build"
},
"homepage": "https://[USERNAME].github.io/[PROJECT-NAME]/",
```

[部署教程](https://juejin.im/post/5b14b2f06fb9a01e5e3d3121)
