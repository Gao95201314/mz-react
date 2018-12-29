//不拆分的写法
/* import {createStore} from 'redux';
import reducer from './reducer';
const store =createStore(reducer);
export default store; */
//拆分的写法
import {createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cityReducer from './reducers.js/city';
import todoReducer from './reducers.js/todo';
const store =createStore(combineReducers({
  todos:todoReducer,
  city:cityReducer
}),applyMiddleware(thunk, logger));
export default store; 
