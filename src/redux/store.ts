import { legacy_createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index'
import thunk from 'redux-thunk'; // 引入异步 action 中间件

// 导出 state type
export type rootStateType = ReturnType<typeof reducers>


// 创建 store
const middlewares = applyMiddleware(thunk)
const store = legacy_createStore(reducers, composeWithDevTools(middlewares))

export default store