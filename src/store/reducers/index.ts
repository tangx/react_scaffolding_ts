// 导入组合器
import { combineReducers } from "redux";

// 导入各个组件的 reducer
import user from './user'
import adminReducer from './admin'


// 导出所有 reducers
const reducers = combineReducers({
  user,
  admin: adminReducer,
})

export default reducers


// export type rootStateType = ReturnType<typeof reducers>