# react-redux-ts-demo

react-redux with typescript


## 安装组件

```bash
# 组件以来
$ yarn add redux react-redux @types/react-redux

# 开发工具
$ yarn add redux-devtools-extension
```

## 使用 store

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

