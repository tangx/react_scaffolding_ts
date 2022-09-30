import React from 'react'
import { connect } from 'react-redux'
import { rootStateType } from '../../redux/store'
import { ICount } from '../../redux/reducers/count'
import {
  // ICountAction,ICountActionAsync,
  increment, incrementAsync
} from '../../redux/actions/count'


/** 似乎这里的方法，只需要指定形参， 返回值只使用 void 就行。 */
interface CountProps {
  count: ICount,
  peopleCount: number,
  increment: (data: ICount) => void,
  incrementAsync: (data: ICount, timeout: number) => void,
}

/** Count 的 UI 组件 */
function Count(props: CountProps) {
  // console.log(props);

  const increment = () => {
    props.increment(1)
  }

  const incrementOdd = () => {
    if (props.count % 2 === 0) {
      return
    }

    props.increment(11)
  }

  const incrementAsync = () => {
    props.incrementAsync(1, 500)
  }

  return (
    <div>
      <h2>1. Count 组件: 求和总数为: {props.count}</h2>
      <h3>People 组件总人数为: {props.peopleCount}</h3>
      <button onClick={increment}>再 +1</button>
      <button onClick={incrementOdd}>和为奇数 +11</button>
      <button onClick={incrementAsync}>延迟 +1</button>
    </div>
  )
}



/** Count 的 Redux-Container 组件 */

// 数值 state
const stateProps = (state: rootStateType) => {
  return {
    count: state.count,
    peopleCount: state.people.length,
  }
}
// 方法 action
const dispatchProps = {
  increment,
  incrementAsync,
}

export default connect(stateProps, dispatchProps)(Count)
