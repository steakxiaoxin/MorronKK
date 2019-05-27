### 代码规则和格式化

1. npm i -D prettier eslint-config-prettier
2. npm i -D eslint babel-eslint
3. npx install-peerdeps --dev eslint-config-airbnb
4. create .eslintrc.json
5. create .eslintignore
6. npm i -D pretty-quick husky

```json
// .eslintrc.json
{
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "extends": ["airbnb", "prettier"],
  "rules": {
    "react/prop-types": false,
    "react/destructuring-assignment": false,
    "react/button-has-type": false,
    "semi": ["error", "never"],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }

```

```json
// .eslintignore
node_modules/
dist/
```

```json
// add this config to your package.json:
{
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged && eslint . --ext .js,.jsx"
    }
  }
}
```
