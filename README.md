# react-redux-ts-demo

react-redux with typescript

**项目地址:** https://github.com/tangx/react_scaffolding_ts/tree/react-redux-ts-people-and-count

**使用方法**

```bash 
$ yarn install
$ yarn start
```

## 安装组件

```bash
# 组件以来
$ yarn add redux react-redux @types/react-redux

# 开发工具
$ yarn add redux-devtools-extension
```

## 使用 store

### 0. 使用 `Provider` 包裹程序

在 index.tsx 文件中， 使用 Provider 包裹 **根组件 `App`**

```tsx
import store from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

### 1. 获取 store 中 state 的数据类型

在 `store/index.ts` 文件中， 使用 `ReturnType<typeof reducers>` 获取 reducers 的类型。
此类型就是 state 的类型。


```ts
// store/index.ts
import reducers from "./reducers";

// 导出 rootStateType
export type rootStateType = ReturnType<typeof reducers>

```

我们知道， 
1. state 的是一个 object 对象。 
2. 其类型， 就是多个 reducer 返回结果的 **组合**。

```ts
// state 的获取和结构类型
const state=store.getState()

type state = {
    xxx: {},
    yyy: [],
    zzz: 0,
}
```

### 2. 使用 Container组件 中使用 state 

在 `src/components/ClassConnect.tsx` 中， 

```tsx
// 在组件中使用 state

import { rootStateType } from '../store'

// stateProps 将 state 信息作为 props 传递给 UI 组件
const stateProps = (state: rootStateType) => {

  // 结构复制， 传递 user 和 admin
  return {
    ...state.user,
    ...state.admin,
  }
}

// dispatchProps 将 action 列表作为 props 传递给 UI 组件
const dispatchProps = {
}

export default connect(stateProps, dispatchProps)(ClassConnect)
```

### 3. 在 UI组件 中使用 state

当通过 Container组件 将 state 通过 props 传递给 UI 组件后。
需要在 UI 组件中 **定义** props 类型。

```tsx
import { IAdmin } from '../store/reducers/admin';
import { IUser } from '../store/reducers/user';

interface IProps {
  admin: IAdmin,
  user: IUser
}

class ClassConnect extends Component<IProps> {
  console.log(this.props.admin)
  console.log(this.props.user)
  
  render() {
    return <div>组件</div>
  }
}
```

注意这里
1. 使用 `interface IProps{}` 定义 props 类型字段参数。 
2. 在 `class ClassConnect extends Component<IProps> {}` 使用 props 类型。

### 4. 使用 action 并修改 redux 数据

#### 4.1 在 `constant.ts` 中创建 action type 枚举常量

action type 必须是唯一的， 可以通过 **枚举常量** 实现。

> enum 一定要使用 **字符串** 枚举， 否则默认数字 (0,1,2,3,...) 的枚举值将在多个组件中造成冲突。 

```ts
// src/store/constant.ts
export enum EnumAdminAction {
  INIT="INIT",
  CHANGE_NAME="CHANGE_NAME",
}
```

#### 4.2 在 `action/admin.tx` 中创建 actions 方法

在 action 方法中， 需要返回一个一个对象， 对象包含

1. `type`: 为枚举类型的值
2. `payload`: 传递给 reducer 加工的数据

```ts
// src/store/actions/admin.ts
import { EnumAdminAction } from "../constant";
import { IAdmin } from "../reducers/admin";

export type IAdminAction = {
  type: EnumAdminAction,
  payload: any,
}

export function changeAdminName(admin: IAdmin): IAdminAction {
  return {
    type: EnumAdminAction.CHANGE_NAME,
    payload: admin,
  }
}
```

#### 4.3 在 `reducers/admin.ts` 中捕获 action

reducer 函数支持两个参数, `(preState, action)`

1. `preState`: 为 store 中保存的状态值。 
    1. 第一次初始化， 可以传入默认值 `initAdminState`
2. `action`: 是一个 Object 对象， 包含 type 和 payload 两个字段。
    1. `type` 为 `constant.ts` 中定义的枚举常量，全局唯一。
    2. `preload` 为实际数据。
3. 使用 `switch` 选择分支。
4. 分支内容为简单函数体， 
    1. 返回一个 **全新对象**
    2. 不能直接对 preState 进行修改， 否则 redux 进行 **浅比较** 将无法更新数据。

```ts
// src/store/reducers/admin.ts

const adminReducer = (preState: IAdminState = initAdminState, action: IAdminAction) => {
  switch (action.type) {
    case EnumAdminAction.CHANGE_NAME:
      return { admin: { ...action.payload } }
    default:
      return preState
  }
}

export default adminReducer
```

#### 4.4 在 components 中的 `Container组件` 中传递 action 函数

`dispatchProps` 可以是一个 **Object对象**,  对象内容就是导入的 **各个函数**。

对象值 `key = value` ， 可以简写。

```ts
import { changeAdminName, IAdminAction } from '../store/actions/admin'

// dispatchProps 将 action 列表作为 props 传递给 UI 组件
const dispatchProps = {
  changeAdminName
}

export default connect(stateProps, dispatchProps)(ClassConnect)
```


#### 4.5 在 components 中的 `UI组件` 中使用 action 函数
 
传入 action 的都在 **UI组件** 的 **props** 中。

如果想要调用， 需要在 `IProps` 接口中补充定义字段。

```ts
interface IProps {
  admin: IAdmin,
  user: IUser,
  changeAdminName: (admin: IAdmin) => IAdminAction,
}
```

之后，就是常规的 props 用法之一， **从父组件传递函数给子组件调用**。

```ts
  // 修改管理员名字
  changeAdminName = () => {
    const { admin } = this.props

    this.props.changeAdminName({
      ...admin, name: admin.name + "1"
    })
  }
```

## 使用 Redux hook

可以直接在 **UI组件** 中使用 **Redux Hook** 操作 redex， 从而替代 **Redux Container 组件**。

```tsx
  // const selectXX = (state: rootStateType) => state.people
  // const persons = useSelector(selectXX)
  const people = useSelector((state: rootStateType) => state.people)
  const count = useSelector((state: rootStateType) => state.count)

  const dispatch = useDispatch()

  const nameNode = createRef<HTMLInputElement>()
  const ageNode = createRef<HTMLInputElement>()

  const handleAddPerson = () => {

    const name = nameNode.current!.value
    const age = ageNode.current!.valueAsNumber

    const p: IPerson = {
      id: nanoid(),
      name,
      age,
    }

    dispatch(addPerson(p))
  }
```

使用 hook 时， 常用组件

1. **state 操作**: `useSelecter()`

```tsx
  // 分开写法
  const selectXX = (state: rootStateType) => state.people
  const persons = useSelector(selectXX)

  // 合并写法
  const people = useSelector((state: rootStateType) => state.people)
```

2. **action 操作**： 需要手工调用 `dispatch`。

```tsx
// 导入 action
import { addPerson } from '../../redux/actions/people'

function People(props: PeopleProps) {
// 导入 dispatch
  const dispatch = useDispatch()

  const nameNode = createRef<HTMLInputElement>()
  const ageNode = createRef<HTMLInputElement>()

  const handleAddPerson = () => {

    const name = nameNode.current!.value
    const age = ageNode.current!.valueAsNumber

    const p: IPerson = {
      id: nanoid(),
      name,
      age,
    }

// 手动 dispatch action
    dispatch(addPerson(p))
  }
}
```

3. 更多 hook 用法， https://react-redux.js.org/api/hooks#useselector
