import { legacy_createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index'

// 导出 state type
export type rootStateType = ReturnType<typeof reducers>


// 创建 store
const middlewares = applyMiddleware()
const store = legacy_createStore(reducers, composeWithDevTools(middlewares))

export default store