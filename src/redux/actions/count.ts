


import { EnumCount, ICount } from '../reducers/count'
import { Dispatch } from 'redux'

// 同步 action 返回值
export type ICountAction = {
  type: EnumCount,
  data: ICount,
}

// 同步action， 返回一个对象
export function increment(data: ICount): ICountAction {
  return {
    type: EnumCount.INCREMENT,
    data: data,
  }
}

// 异步action, 返回一个函数
// 省略返回值也可以。
export function incrementAsync(data: ICount, timeout: number) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, timeout);
  }
}


