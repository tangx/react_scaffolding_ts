import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";



// 默认导出 store
const middlewares = applyMiddleware()
const store = createStore(reducers, composeWithDevTools(middlewares))

export default store

// 导出 rootStateType
export type rootStateType = ReturnType<typeof reducers>
