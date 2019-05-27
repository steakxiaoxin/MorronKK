### react

1. npm i react react-dom

2. create src/App.jsx

3. create src/index.jsx

4. create src/index.html

5. npm start

   "start": "webpack-dev-server --open --config build/webpack.dev.js"

6. npm run build

   "build": "rimraf dist && webpack --config build/webpack.prod.js"

```jsx
// App.jsx
import React from 'react'

function App() {
  return <div>Hello World</div>
}

export default App
```

```jsx
// index.jsx
import React from 'react'
import { render } from 'react-dom'
import App from './App'

render(<App />, document.getElementById('root'))
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```
