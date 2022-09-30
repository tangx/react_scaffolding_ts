import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const middlewares = applyMiddleware()
const store = createStore(reducers, composeWithDevTools(middlewares))

export default store