import React from 'react';
import ReactDOM from 'react-dom';

/*
 在 react-redux 的使用中，
 我们只需要将应用最外层使用 Provider 组件给包裹里面，并且传递 store 。于是其余的所有 react-redux 的 容器组件都能获取 store.
*/
import { Provider } from 'react-redux';
import App from './App';
import './base.less';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
)
