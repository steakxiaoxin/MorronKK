# MorronKK

just for fun

1. npm i / (安装项目依赖)
2. npm start / (开发环境)
3. npm run build / (打包)
4. npm run depoly / (打包并部署到 github page)

gitpage 地址：
https://steakxiaoxin.github.io/MorronKK/

netlify 地址：
用本仓库的 master 分支的代码部署在 netlify 上
https://morronkk.netlify.com/

使用 Travis-CI

1. 在项目根目录添加 .travis.yml
2. 在 GitHub / Settings / Developer settings / Personal access tokens 添加 new token 权限为 repo
3. 在 Travis CI 项目的 Settings / Environment Variables 添加环境变量 GITHUB_TOKEN
4. commit 后 push 即可

```yml
language: node_js
node_js:
  - 'stable'

cache:
  directories:
    - node_modules

script:
  - npm run build

deploy:
  provider: pages
  skip_cleanup: true
  github-token: $GITHUB_TOKEN
  local_dir: dist
  on:
    branch: master
```

[参考视频](https://www.youtube.com/watch?v=BFpSD2eoXUk)
