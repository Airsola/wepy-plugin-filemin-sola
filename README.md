# wepy 文件压缩插件

支持css，xml，json的压缩
基于wepy-plugin-filemin 修改 1.3.14
主要处理了直接引入小程序原生组件时压缩报错的问题
在压缩JSON,或WXML时可能遇到以下问题
错误如下
```
node_modules/pretty-data/pretty-data.js
TypeError: Cannot read property 'replace' of null
```

## 安装

```
npm install wepy-plugin-filemin-sola --save-dev
```

## 配置`wepy.config.js`

```
module.exports.plugins = {
    'filemin': {
        filter: /\.(json|wxml|xml)$/
    }
};
```