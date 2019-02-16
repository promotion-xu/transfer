
## Tips
1. 注意： 开发分支为远端的dev分支， 提交代码到远端dev分支即可。

## PC端（）
```vue3.0+ts+vuex+scss+rem+登录拦截```
```animate.css```

### 接口文档(需要内网)
1. 登录页面
```url: /v1/authorization```
```method: post```
```params: {username: string, password: string}```




# my_components

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### yarn/npm/node-sass setttings
```npm
1. npm get registry
2. npm config set registry http://registry.npm.taobao.org/
3. npm config set registry https://registry.npmjs.org/
```

```yarn
1. yarn config get registry
2. yarn config set registry  http://registry.npm.taobao.org/
```

### questions
1. can't find module 'less'
  ```yarn add less@2.7.3 less-loader --save```
2. 




## TODOLIST
1. 解耦request api
2. 