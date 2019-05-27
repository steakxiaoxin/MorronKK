### webpack & babel

> webpack 从 4.x 版本开始，需要同时安装 webpack，webpack-cli(此工具用于在命令行中运行 webpack)。

1. npm i -D webpack webpack-cli webpack-merge webpack-dev-server

2. npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react

   - **babel-core:** Transforms ES6 code to ES5
   - **babel-loader:** Webpack helper to transpile code, given the the preset.
   - **babel-preset-env**: Preset which helps babel to convert ES6, ES7 and ES8 code to ES5.
   - **babel-preset-react:** Preset which Transforms JSX to JavaScript.

3. npm i -D html-webpack-plugin

4. create webpack.common.js , webpack.dev.js , webpack.prod.js, under build folder

5. npm i -D rimraf (跨平台删除文件夹插件指令)

   "build": "rimraf dist && webpack --config build/webpack.prod.js"

6. npm i -D nodemon (监视 node.js 应用程序中的任何更改并自动重启服务)

   "start": "nodemon --watch build --exec \"webpack-dev-server --open --config build/webpack.dev.js\"",

```js
// webpack.common.js
const path = require('path')

module.exports = {
  entry: path.join(__dirname, '../src/index.jsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[contenthash:6].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
```

```js
// webpack.dev.js
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map'
})
```

```js
// webpack.prod.js
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      vendor: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
})
```

```json
// .babelrc
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
