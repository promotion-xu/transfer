
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
### git hooks ---  https://juejin.im/post/5cd5227cf265da03761ea69d

### 解决ui框架适配问题


### docker前端自动化部署
#### docker 应用场景
1. 简化配置,同一Docker的配置可以在不同 环境中使用,降低了硬件要求和应用环境之间的耦合度
2. 代码的流水线管理.代码从开发者的假期到最终在生产环境上的部署,需要经过很多的中间环境.而每一个中间环境都有自己微小的蛤贝,Docker给应用提供一个从开发到上线均一致的环境,让代码的流水线变得简单.。
3. 提高开发效率 
4. 隔离应用,使应用松耦合 
5. 快速部署 

### 1. docker for windows安装
### 2. docker version
### 3. docker search nginx
### 4. docker pull nginx  /  docker pull nginx:版本号
### 5. 查看下载好的Image: docker images
### 6. docker run -d -p 80:80 --name nginx -v /usr/share/nginx/html nginx
### 7. 查看容器启动列表: docker ps
### 8.  
