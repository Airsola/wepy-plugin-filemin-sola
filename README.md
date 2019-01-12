# wepy 文件压缩插件

支持css，xml，json的压缩
基于wepy-plugin-filemin 1.3.14 修改
主要处理了直接引入小程序原生组件时压缩报错的问题
在压缩JSON,或WXML时可能遇到以下问题
错误如下
```
node_modules/pretty-data/pretty-data.js
TypeError: Cannot read property 'replace' of null
```

## 安装
移除旧的 wepy-plugin-filemin
在package.json 添加以下库依赖
```
"wepy-plugin-filemin": "Airsola/wepy-plugin-filemin-sola",

```

## 配置`wepy.config.js`

```
module.exports.plugins = {
    'filemin': {
        filter: /\.(json|wxml|xml)$/
    }
};
```