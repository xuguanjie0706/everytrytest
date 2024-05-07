# style-loader 和 css-loader 差别

前者解析生成 style 标签 后者生成 css 文件

# url-loader 和 file-loader 差别

url-loader 封装了 file 当会见大小超过的时候调用 file-loader,小于设置大小转化成 base64

# loader 和 plugin 的差别

loader 是加载器，只能解析 js 文件
plugin 是插件，解决自身无法解决事情，如注入全局变量

# 301 和 302 状态码

# React.memo useMemo useCallback 差别

都是为了优化，提高性能，减少计算
React.memo 是一个高阶组件，作用类似于 useMemo
useMemo 用于缓存计算得到的值。
useCallback 用于缓存函数，特别是那些作为 props 传递给子组件的函数

# new 操作符

```
//创建一个新的对象 obj
 const obj = {}
//将对象与构建函数通过原型链连接起来
obj.__proto__ = Func.prototype
//将构建函数中的 this 绑定到新建的对象 obj 上
let result = Func.apply(obj, args)
//返回这个对象
return obj
```
