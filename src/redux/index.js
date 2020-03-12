import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from "redux-saga";

// reducer 模块  => 初始化store, 修改状态的函数
import app from './modules/app'
import city from './modules/city'


// saga 模块
import sage from './saga'

// 创建saga中间件并注册
const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
  app,
  city,
});
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))

// 中间件运行saga 
sagaMiddleware.run(sage);
export default store


// createStore 创建store
// reducer 初始化store, 修改状态的函数
// getState 获取状态值
// dispatch 提交更新
// subscribe 变更订阅

// 使用方法请参考pages/noFound.index.js