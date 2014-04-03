# 剪闌尾 - 前端

## 安裝

請先裝 node.js 跟 [compass][2]，node.js 我建議使用 [nvm][1] 安裝，安裝完畢後，請先裝 grunt 跟 bower：
```sh
npm i -g grunt-cli bower
```

安裝完之後進到 appenddectomy 目錄，用下面指令安裝所需 modules

```sh
npm i && bower i
```

安裝完畢後，用下面的指令啟動測試用的 server
```sh
grunt serve
```

如果你想要 deploy 到你自己的 github.io，可以用
```sh
grunt deploy
```

  [1]: https://github.com/creationix/nvm
  [2]: http://compass-style.org/install/
