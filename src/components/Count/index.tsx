import React from 'react'
import { connect } from 'react-redux'
import { rootStateType } from '../../redux/store'
import { ICount } from '../../redux/reducers/count'
import { ICountAction, increment } from '../../redux/actions/count'

interface CountProps {
  count: ICount
  increment: (data: ICount) => ICountAction
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

  return (
    <div>
      <h2>1. Count 组件</h2>
      <h3>求和总数为: {props.count}</h3>
      <button onClick={increment}>再 +1</button>
      <button onClick={incrementOdd}>和为奇数 +11</button>
      <button>延迟 +1</button>
    </div>
  )
}



/** Count 的 Redux-Container 组件 */

// 数值 state
const stateProps = (state: rootStateType) => {
  return {
    count: state.count
  }
}
// 方法 action
const dispatchProps = {
  increment,
}

export default connect(stateProps, dispatchProps)(Count)
