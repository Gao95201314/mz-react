# 基于 React 的 卖座网 实现

# redux

1. 安装 yarn add redux
2. src下面创建一个 store 文件夹
3. store 文件夹下创建一个 index.js -> 用来创建 store
4. store 文件夹下创建一个 reducer.js -> 用来处理 state 的变化，是一个纯函数
5. 在 store / index.js 中定义数据
6. 在 需要的组件中使用 store 的数据（state）  -> getState()


# PS: 异步操作

1. 组件A  仓库S 组件B
2. 组件A中有个 state 叫做 films .这个films要从 后台接口中取得。

3. 加入 films 的state 是放在仓库中的。
4. 组件A中做ajax请求 。请求到数据之后，再做 dispatch(actions)
5. 上面这个步骤没有问题，只是我们想要将 ajax的请求放入到 仓库中去做。

带着这个疑问。考虑   中间件。。。。
