# React-admin

一个基于 [Create React App](https://github.com/facebook/create-react-app) 搭建的后台管理系统项目。

## 技术栈
react、redux、redux-saga、react-router-dom、axios、less、sass、antd

## scripts

#### `yarn start`
开发环境 [http://localhost:2008](http://localhost:2008)

### `yarn pro`
生产环境打包

`更多请查看package.json`

## 项目依赖介绍

- 路由: react-router-dom
- 数据管理react-redux、redux、redux-saga 
- 组件库按需加载: antd、babel-plugin-import 
- 配置lessModule: less、less-loader 
- 从文件读取配置变量: env-cmd
- 日期时间: moment
- 加载进度: nprogress
- 本地代理: http-proxy-middleware
- EventEmitter事件总栈: events


## 温馨提示
- react life cycle 请查看src/pages/noFound.jsx
- redux关联组件 请查看src/pages/login/index.jsx

## 项目目录
```
├── README.md
├── config // webpack配置
├── package.json
├── public
├── scripts // 打包配置
├── src // 项目代码
│   ├── App.jsx
│   ├── assets // 静态资源
│   ├── components // 全局组件
│   ├── config.js // 全局配置
│   ├── index.jsx // 入口文件
│   ├── pages // pages
│   │   ├── home
│   │   │   ├── components // 页面组件
│   │   │   ├── index.module.less // module.less
│   │   │   └── index.jsx
│   │   └── noFound.jsx // 404
│   ├── redux // redux
│   │   ├── index.js
│   │   ├── modules // 模块
│   │   └── saga.ts // saga
│   ├── router // 路由
│   ├── server // server地址
│   ├── serviceWorker.js
│   ├── setupProxy.js // dev proxy配置
│   ├── style // 全局样式
│   └── utils // 工具
├── jsconfig.json
└── yarn.lock
```

## 代码规范
本项目采用了  ESLint 来进行代码规范约束，配置文件为根目录下的 .eslintrc.js 文件。

## 推荐编辑器
强烈推荐 VSCode 进行代码编辑

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
