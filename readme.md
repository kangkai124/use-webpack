文件监听的原理分析

```
webpack --watch
```

轮询判断文件的最后编辑是否变化

某个文件发生变化，不会立刻告诉监听者，而是先缓存起来，等到 aggregateTimeout 把所有的变化的文件一起更新。

```js
module.export = {
  watch: true,
  watchOptions: {
    // 默认为空，排除一些文件有利于性能提升
    ignored: /node_modules/,
    // 监听到变化后等300ms再去执行
    aggregateTimeout: 300,
    // 轮询频率，每秒1000次
    poll: 1000
  }
}
```