#### Usage
-----

```shell
npm init -y #使用默认选项
npm i typescript -g #全局安装 typescript

tsc --init
tsc src/index.ts 
```

#### 配置构建工具 使用Node常见的webpack
-----
```shell
npm install webpack webpack-cli webpack-dev-server -D
npm install ts-loader typescript -D
```

#### Config webpack
```shell
npm install html-webpack-plugin -D
npm install clean-webpack-plugin -D
npm install webpack-merge -D
```