import { legacy_createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index'

const middlewares = applyMiddleware()

const store = legacy_createStore(reducers, composeWithDevTools(middlewares))

export default store